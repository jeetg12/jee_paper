var minute = 4;
    var second= 60;
    setInterval (function() {

if(minute ==0 && second==1){
    getElementById("timer").innerHTML = "00:00";}
    else{
        second--;
        document.getElementById("timer").innerText=`Time left - ${minute}: ${second}`
        if(second==0){
            minute--;
            second =60;
            if(minute ==0){
                minute = minute;
                window.open("#")

            }
            if(minute.toString().length==1){
                minute = "0"+ minute;

            }
            if(second.toString().length==1){
                second = "0"+ second;}
                document.getElementById("timer").innerHTML = minute + ":" + second;
            }

                

        }
    },1000)