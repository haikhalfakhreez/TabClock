document.addEventListener('DOMContentLoaded', function() {
    const large = document.getElementById('large');
    const small = document.getElementById('small');
    const top = document.getElementById('date');
    let screen = window.matchMedia("(max-width:530px)");
    
    // Time
    function hours() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
    
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();

        h = addZero(h);
        m = addZero(m);
        s = addZero(s);

        if (screen.matches) {
            large.innerHTML = h + ":" + m;
            setTimeout(hours, 500);
        }else {
            large.innerHTML = h + ":" + m + ":" + s;
            setTimeout(hours, 500);
        }
    }
    hours(screen);

    
    // Miliseconds
    function miliseconds() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        function addMsZero(i) {
            if (i < 10) {
                i = "00" + i;
            }else if (i > 10 && i < 100) {
                i = "0" + i;
            }
            return i;
        }
    
        let d = new Date();
        let s = d.getSeconds();
        let ms = d.getMilliseconds();
        s = addZero(s);
        ms = addMsZero(ms);

        if (screen.matches) {
            small.innerHTML = s + ":" + ms;
            setTimeout(miliseconds, 1);
        }else {
            small.innerHTML = ms + " ms";
            setTimeout(miliseconds, 1);
        }
    }
    miliseconds(screen);


    // Date
    let d = new Date();
    let monthLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                     "October", "November", "December"];
    let monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let long = monthLong[month];
    let short = monthShort[month];

    //check screen width
    function date() {
        if (screen.matches) {
            top.innerHTML = day + " " + short + " " + year;
        }else {
            top.innerHTML = day + " " + long + " " + year;
        }
    }

    date(screen);
    window.addEventListener('resize', function() {
        date();
        hours();
        miliseconds();
    });

});