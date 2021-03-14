$(document).ready(function(){

    

    var counter = 0;

    var timeleft =prompt("Enter the time(in Seconds)");

    

    var timer= document.getElementById("timers");

    

    function convertSeconds(s){

       var minu = Math.floor(s / 3600);

        var min = Math.floor(s/60) ;

        var sec = s % 60;

        var hrs = minu;

        

        if(min > 60){

            min = Math.floor(min/ 60)

        }

        if(sec < 10 && sec > 0){

           sec=  "0"+sec;

        }

        if(sec==0){

            sec = "0"+sec

        }

        if(min < 10 && min > 0){

            min= "0"+min;

        }

        if(hrs < 10 && hrs > 0){

            hrs= "0"+hrs;

        }

        if(hrs == 0){

            hrs = "0"+ hrs;

        }

        if(min== 0){

            min = "0"+min

        }

        

        if(sec==0 && min==0){

            return "00:00:00";

        }

        else if(sec<0 && min<0){

            return "00:00:00";

        }

        else{

        return hrs+":"+min +":"+ sec;

        }

    }

    

    timer.innerHTML = (convertSeconds(timeleft - counter));

    

    function timeIt(){

        counter++;

        timer.innerHTML=(convertSeconds(timeleft - counter));

    }

    

    setInterval(timeIt, 1000);

    

})

