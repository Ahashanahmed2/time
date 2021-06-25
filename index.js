


function showTime() {
    var d = new Date();
    var h = d.getHours(); // 0 - 23
    var m = d.getMinutes(); // 0 - 59
    var s = d.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;






    var time = h + ":" + m + ":" + s + " " + session;

   let ti = document.getElementById("myclock").innerHTML = time;
   




}



let v =setInterval(showTime,1000);












