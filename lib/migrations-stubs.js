var Migrations;

(function() {
	"use strict";

	var emptyFunction = function() {
	};

	var migrations = function() {
	};

	migrations.prototype = {
		migrateTo: emptyFunction,
		add: emptyFunction
	}

	Migrations = new migrations();
})();