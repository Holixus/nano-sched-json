"use strict";

var fs = require('nano-fs'),
    Promise = require('nano-promise'),
    Path = require('path');

module.exports = {

parse: function (log, data) {
	if (data.encoding !== 'utf8')
		throw TypeError('data.encoding is not "utf8"');

	data.content = eval('('+data.content+')');
	data.encoding = 'json';
},

stringify: function (log, data) {
	if (data.encoding !== 'json')
		throw TypeError('data.encoding is not "json"');

	var json = require('nano-json');

	data.content = data.json_format ? json.render(data.content, data.json_format) : json.js2str(data.content);
	data.encoding = 'utf8';
}

};
