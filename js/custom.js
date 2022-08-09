
  var date = new Date();
  var show = document.getElementById("show"),
    day = date.getDate(),
    month = date.getMonth() + 1,
    /*because month between 0 to 11 , 0 referring jan, February referring 1 */
    year = date.getFullYear();

  function currentDate() {
    "use strict";
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    show.innerHTML = day + "/" + month + "/" + year;
  }
  // time script
  var myVar = setInterval(function() {
    myTimer();
  }, 1000);

  function myTimer() {
    "use strict";
    var time = new Date(),
      show2 = document.getElementById("show2"),
      hours = time.getHours(),
      minute = time.getMinutes(),
      second = time.getSeconds();
    if (hours > 12) {
      hours = hours - 12;
      show2.innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
    } else {
      show2.innerHTML = hours + ":" + minute + ":" + second + " " + "AM";
    }
  }
  //today is script
  var today = new Date(),
    day = today.getDay(),
    show3 = document.getElementById("show3"),
    dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function todayIs() {
    "use strict";
    show3.innerHTML = dayList[day];
  }
