solutions["gc"] = {
	"program": function (input) {
		var output = "";

		var lines = input.split("\n");
		var strings = [];

		for (var i in lines) {
			output += lines[i] + "|";
		};

		return output;
	},
	"label": "5 - Computing GC Content",
	"id" : "gc"
};
