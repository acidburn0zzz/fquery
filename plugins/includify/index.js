/*jshint node: true, strict: false */

var _ = require('underscore'),

	includify = require('./includify');


module.exports = function (fQuery) {

	fQuery.fn.includify = function (options) {

		return this.edit(function () {

			this.content = includify({ file: this.path, content: this.content });
		});
	};
};
