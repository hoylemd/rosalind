solutions["revc"] = {
	"program": function (input) {
		var output = "";
		for (var i = input.length - 1; i >= 0; i--) {
			if (science.nucleotides[input[i]]) {
				output += science.nucleotides[input[i]].dnaMatch.symbol;
			}
		}
		return output;
	},
	"label": "3 - Secondary and Tertiary structure of DNA",
	"id" : "revc"
};
