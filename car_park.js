function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10) minutes = "0" + minutes
    var string = hours + ":" + minutes + " ";
    if(hours > 11){
        string += "PM";
    } else {
        string += "AM";
    }
    document.getElementById('clock').innerHTML = string;
}
setInterval(updateTime, 1000);