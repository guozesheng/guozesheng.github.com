
	var target_date; // set the countdown date
	var days, hours, minutes, seconds; // variables for time units
	var counddown_ID; // to clear the interval
	var countdown = document.getElementById("tiles"); // get tag element

    function timetoGo(isCount) {
        getCountdown(isCount);
        counddown_ID = setInterval(function () { getCountdown(isCount); }, 1000);
    }

	function setCountdown() {
        var hours_lefts = document.getElementById("timehour").value;
        var minutes_lefts = document.getElementById("timemin").value;
        target_date = new Date().getTime() + ( ((hours_lefts * 60) + minutes_lefts) * 60 * 1000 );
        
        timetoGo(1);
	}
	
	function getCountdown(isCount) {

		// find the amount of "seconds" between now and target
		var current_date = new Date().getTime();
		if (isCount == 1) {
            var seconds_left = (target_date - current_date) / 1000;
		}
		else {

            var seconds_left = (current_date - target_date) / 1000;
		}

		days = pad( parseInt(seconds_left / 86400) );
		seconds_left = seconds_left % 86400;
		 
		hours = pad( parseInt(seconds_left / 3600) );
		seconds_left = seconds_left % 3600;
		  
		minutes = pad( parseInt(seconds_left / 60) );
		seconds = pad( parseInt( seconds_left % 60 ) );

		// format countdown string + set tag value
		countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
		
		if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(counddown_ID);
            notify();
            
            setTimeout("timetoGo(0)", 1000);
		}
	}

	function pad(n) {
		return (n < 10 ? '0' : '') + n;
	}
	
	function notify() {
        if (!window.webkitNotifications) {
            //alert("no notifications support");
            return;  // no notifications support
        }
        var havePermission = window.webkitNotifications.checkPermission();
        if (havePermission == 0) {
            // 0 is PERMISSION_ALLOWED
            var notification = window.webkitNotifications.createNotification(
                "1.png",
                "Times Over",
                'Go Go Go !!!'
            );

            notification.onshow = function () {
                setTimeout( notification.cancel(), 3000 );
            }
            notification.show();
        } else {
            window.webkitNotifications.requestPermission();
        }
    }

