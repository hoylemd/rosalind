solutions["dna"] = {
	"program": function (input) {
		var counts = {};

		for (var nt in science.dnaNucleotides) {
			counts[science.dnaNucleotides[nt].symbol] = 0;
		}

		for (var index = 0; index < input.length; index++) {
			var nt = input[index];
			counts[nt]++;
		};

		return counts["A"] + " " + counts["C"] + " " + counts["G"] + " " + counts["T"];
	},
	"label": "1 - Counting Nucleotides",
	"id" : "dna"
};
