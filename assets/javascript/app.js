//hide form and click start button to begin the game
window.onload = function() {
	$("#content").hide();
	$("#start").on("click", countdown.start);	
}

var intervalId;
//create countdown object
var countdown = {

	time: 10,
	
	start: function() {
	//hide the start button and show form. Use setInterval to start the count.
		$("#start").hide();
		$("#content").show();
		intervalId = setInterval(countdown.count, 1000);
	},
	count: function() {
		//decrement the time by 1
		countdown.time--;
		//pass the current time into the timeConverter function
		var converted = countdown.timeConverter(countdown.time);
		//show converted time in display div
		$("#display").html(converted);
	},
	timeConverter: function(t) {
		var minutes = Math.floor(t / 60);
    	var seconds = t - (minutes * 60);

    	if (seconds < 10) {
    		seconds = "0" + seconds;
    	}
    	 if (seconds == 0) {
			countdown.stop(seconds);

    	 	
    	 }    	
    	return minutes + ":" + seconds;
    }, //timeConverter end bracket
    
    //stop at 0:00
    stop: function(stop) {
    	 var stop = clearInterval(intervalId);
    	 alert('You Lose');
    	 $("#content").hide();
    	 $("#results").show();
    },


};