var processString = function (string) {
	var tide_counts = 0;

	for(var j in string) {
		switch(string[j]) {
			case "C":
			case "G":
				tide_counts++;
				break;
		}
	}

	return tide_counts / string.length;
};

solutions["gc"] = {
	"program": function (input) {
		var output = "";

		var lines = input.split("\n");
		var best_id = ""
		var best_content = 0;
		var string = "";
		var id = "";

		for (var i in lines) {
			if (lines[i][0] == ">") {
				if (string) {
					var content = processString(string);
					console.log(id);
					console.log(content);

					if (content > best_content) {
						best_content = content;
						best_id = id;
					}
				}

				id = lines[i].substring(1);
				string = ""
			} else {
				string += lines[i];
			}
		}
		if (string) {
			var content = processString(string);

			if (content > best_content) {
				best_content = content;
				best_id = id;
			}
		}
		return best_id + "\n" + (best_content * 100);
	},
	"label": "5 - Computing GC Content",
	"id" : "gc"
};
