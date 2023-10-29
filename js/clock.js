setInterval(setClock, 1);
function setClock()
    {
        let minute = document.getElementById("minute");
        let hour = document.getElementById("hour");
        let second = document.getElementById("second");
        let second_second = document.getElementById("second_second");

        let date = new Date();
        let milliseconds = date.getMilliseconds() / 1000;
        let seconds = (date.getSeconds() + milliseconds) / 60;
        let minutes = (seconds +  date.getMinutes()) / 60;
        let hours = (minutes + date.getHours()) / 12;

        setRotation(second, seconds);
        setRotation(minute, minutes - 6);
        setRotation(hour, hours);
        setRotation(second_second, 180 + seconds);
    }

    function setRotation(element, ratio) {
        ratio = ratio * 360;
        element.style.setProperty("--rotation", ratio);
    }