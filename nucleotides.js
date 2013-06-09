var science = new function () {
	this.nucleotides = {
		"A": {
			name: "Adenine",
			symbol: "A"
		},
		"C": {
			name: "Cytosine",
			symbol: "C"
		},
		"G": {
			name: "Guanine",
			symbol: "G"
		},
		"T": {
			name: "Thymine",
			symbol: "T"
		},
		"U": {
			name: "Uracil",
			symbol: "U"
		}
	};

	this.dnaNucleotides = [
		this.nucleotides["A"],
		this.nucleotides["C"],
		this.nucleotides["G"],
		this.nucleotides["T"]
	];

	this.mRnaNucleotides = [
		this.nucleotides["A"],
		this.nucleotides["C"],
		this.nucleotides["G"],
		this.nucleotides["U"]
	];
}();

science.nucleotides["A"].dnaMatch = science.nucleotides["T"];
science.nucleotides["C"].dnaMatch = science.nucleotides["G"];
science.nucleotides["G"].dnaMatch = science.nucleotides["C"];
science.nucleotides["T"].dnaMatch = science.nucleotides["A"];

science.nucleotides["A"].mRnaMatch = science.nucleotides["U"];
science.nucleotides["C"].mRnaMatch = science.nucleotides["G"];
science.nucleotides["G"].mRnaMatch = science.nucleotides["C"];
science.nucleotides["U"].mRnaMatch = science.nucleotides["A"];

