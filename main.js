var solutions = {};
$(document).ready( function () {

	for (var i in solutions) {
		var option = $("<option id='" + solutions[i].id + "'>" + solutions[i].label + "</option>");
		$("#problem").append(option);

	}

	var problemChange = function() {
		var current_problem = $(this).children(":selected").attr("id");

		if (solutions[current_problem]) {
			$("#go").click(function() {
				var input = $("#input").val();

				var output = solutions[current_problem]["program"](input);

				$("#output").val(output);
			});
			$("#go").removeAttr("disabled");
		} else {
			$("#go").attr("disabled", "disabled");
		}
	};
	$("#problem").change(problemChange);
	problemChange.call($("#problem"));
});
