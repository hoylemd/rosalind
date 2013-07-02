solutions["fib"] = {
	"program": function (input) {
		var n = 0 + input.split(" ")[0];
		var k = 0 + input.split(" ")[1];

		var n_2 = 1;
		var n_1 = 1;
		var newborn = 0;

		for (var i = 2; i < n; i++) {
			newborn = n_2 * k + n_1;
			n_2 = n_1;
			n_1 = newborn;
		}

		return newborn;
	},
	"label": "4 - Rabbits and Recurrence Relations",
	"id" : "fib"
};
