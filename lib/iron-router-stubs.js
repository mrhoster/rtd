var Router, RouteController;

(function () {
	"use strict";

	var emptyFunction = function () {
	};

	Router = {
		map: emptyFunction,
		configure: emptyFunction,
		current: emptyFunction,
		before: emptyFunction,
		after: emptyFunction
	};

	RouteController = {
		extend: function(route){
			return route;
		}
	};

})();
