function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minitues = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minitues = minitues < 10 ? "0" + minitues : minitues;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var currentTime = hours + ":" + minitues + ":" + seconds;
    document.getElementById('currentTime').innerHTML = currentTime;
}
setInterval(() => {
    clock();
}, 1000);