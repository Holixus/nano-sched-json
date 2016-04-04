"use strict";

var assert = require('core-assert'),
    json = require('nano-json'),
    timer = require('nano-timer'),
    Promise = require('nano-promise'),
    util = require('util');


/* ------------------------------------------------------------------------ */
function Logger(stage, job) {

	var context = job.sched.name + ':' + job.name + '#' + stage;

	this.stage = stage;
	this.job = job;
	this.acc = [];
	this.dumps = [];

	this.log = function (code, format, a, b, etc) {
		acc.push(util.format('  %s: %s', context, util.format.apply(util.format, Array.prototype.slice.call(arguments, 1))));
	};

	this.trace = function () {
		this.log.apply(this, Array.prototype.concat.apply(['trace'], arguments));
	};

	this.warn = function (code, format, a, b, etc) {
		acc.push(util.format('W.%s: warning: %s', context, util.format.apply(util.format, Array.prototype.slice.call(arguments, 1))));
	};

	this.error = function (format, a, b, etc) {
		acc.push(util.format('E.%s: error: %s', context, util.format.apply(util.format, Array.prototype.slice.call(arguments, 1))));
	};

	this.fail = function (format, a, b, etc) {
		acc.push(util.format('F.%s: FAIL: %s', context, util.format.apply(util.format, arguments)));
	};

	this.writeListing = function (name, data) {
		this.dumps.push({
			name: name, 
			data: data
		});

		return Promise.resolve();
	};
}

Logger.prototype = {
};



var json_plugin = require('../index.js'),
	opts = {
			dist_folder: __dirname+'/dist',
			sources_folder: __dirname+'/src'
		},
    job = {
		name: 'test',
		sched: {
			name: 'test',
			opts: opts
		}
	};

suite('json.parse', function () {
	test('fine', function (done) {

		var log = new Logger('json.parse', job),
		    data = {
					opts: opts,
					encoding: 'utf8',
					content: '{ a:1 }',
					result: { a: 1 }
				};

		Promise.resolve(log, data)
			.then(json_plugin.parse)
			.then(function () {
				assert.deepStrictEqual(data.content, data.result);
				assert.strictEqual(data.encoding, 'json');
				done();
			}).catch(done);
	});

	test('bad encoding', function (done) {
		var log = new Logger('json.parse', job),
		    data = {
					opts: opts,
					encoding: 'utf',
					content: '{ a:1 }',
					result: { a: 1 }
				};

		Promise.resolve(log, data)
			.then(json_plugin.parse)
			.then(function () {
				done(Error('not failed'));
			}, function (e) {
				done();
			}).catch(done);
	});
});

suite('json.stringify', function () {
	test('fine with format', function (done) {
		var log = new Logger('json.stringify', job),
		    data = {
					opts: opts,
					encoding: 'json',
					json_format: {
						'': ' #, # #',
						'<>:': 1
					},
					content: { a:1 },
					result: '{ a:1 }'
				};

		Promise.resolve(log, data)
			.then(json_plugin.stringify)
			.then(function () {
				assert.strictEqual(data.content, data.result);
				assert.strictEqual(data.encoding, 'utf8');
				done();
			}).catch(done);
	});

	test('fine', function (done) {
		var log = new Logger('json.stringify', job),
		    data = {
					opts: opts,
					encoding: 'json',
					content: { a:1 },
					result: '{a:1}'
				};

		Promise.resolve(log, data)
			.then(json_plugin.stringify)
			.then(function () {
				assert.strictEqual(data.content, data.result);
				assert.strictEqual(data.encoding, 'utf8');
				done();
			}).catch(done);
	});

	test('bad encoding', function (done) {
		var log = new Logger('json.stringify', job),
		    data = {
					opts: opts,
					encoding: 'jso',
					json_format: {
						'': ' #, # #',
						'<>:': 1
					},
					content: { a:1 },
					result: '{ a:1 }'
				};

		Promise.resolve(log, data)
			.then(json_plugin.stringify)
			.then(function () {
				done(Error('not failed'));
			}, function (e) {
				done();
			}).catch(done);
	});
});
