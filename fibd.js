solutions["fibd"] = {
	"program": function (input) {
		var n = +input.split(" ")[0];
		var m = +input.split(" ")[1];

		var memory = [0, 1];

		var newborn = 0;

		for (c = 2; c < n; c++) {
			var next = memory[c-2] + memory[c-1];

			if (c > m) {
				next -= memory[c - m] - memory[c - (m + 1)];
			}

			memory[c] = next;
		}

		return memory[c-1];
	},
	"label": "5 - Mortal Fibonacci Rabbits",
	"id" : "fibd"
};
