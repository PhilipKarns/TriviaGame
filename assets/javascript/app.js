alert("hi");

window.onload = function() {
	$("#start").on("click", countdown.start);
}

var countdown = {

	start: function() {
		$('#start').hide();
		intervalId = setInterval(countdown.count, 1000);
	},
	count: function() {
		countdown.time--;
	},
};