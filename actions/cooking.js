module.exports = function(socket){

    var //db = require('../models'),
        _  = require('lodash'),
        jsdom = require("jsdom"),
        co = require('co');

    this.getAll = co(function*()
    {
        //var planets = yield db.Planet.findAll({});

        var items = [];
        var url = "http://koken.vtm.be/recepten";

        jsdom.env(url, ["http://code.jquery.com/jquery.js"], function (errors, window) {

            var $ = window.$;
            window.$(".node.node-recipe.node-teaser.play-video").each(function(){

                var content = $(this).find('h2 a');
                var thumb = $(this).find('.thumb img').attr('src');

                items.push({
                    title: content.text(),
                    desc: content.text(),
                    label: '1h',
                    thumb: thumb,
                    href: 'http://koken.vtm.be' + content.attr('href'),
                });
            });
            socket.emit('cooking:get', items);
        });

    });

    this.getOne = co(function*(data)
    {
        var response = {};

        jsdom.env(data.href, ["http://code.jquery.com/jquery.js"], function (errors, window) {

            response.id = data.id;
            response.name = window.$("#recipe-name").html();
            response.preparation = window.$(".preparation").html();
            response.ingredients = window.$(".well.ingredients").html();
            response.thumb = window.$('.thumb.hidden-xs .field-item.even img').attr('src');

            socket.emit('cooking:getOne', response);
        });
    });


    return this;
};