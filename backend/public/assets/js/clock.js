const showTime = () => {
    const date = new Date();
    let h = date.getHours(); // Masaa inaenda 24hrs..0 - 23hrs
    let m = date.getMinutes(); // Dakika ni 0 - 59
    let s = date.getSeconds(); // seconds ikimbie hadi 59
    let session = "AM";
  
    if (h === 0) {
      h = 12;
    }
  
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
  
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  
    const time = `${h}:${m}:${s} ${session}`;
    const clockDisplay = document.getElementById("MyClockDisplay");
    clockDisplay.innerText = time;
    clockDisplay.textContent = time;
  
    setTimeout(showTime, 1000);
};
  
showTime();
