$(document).ready(function() {
    var goalMs = 1479322800000
    var interval;

    var w = $("#counter-w");
    var d = $("#counter-d");
    var h1 = $("#counter-h-1");
    var h2 = $("#counter-h-2");
    var min1 = $("#counter-min-1");
    var min2 = $("#counter-min-2");
    var s1 = $("#counter-s-1");
    var s2 = $("#counter-s-2");

    setTimeout(function() {
            setInterval(function() {
                interval = setTimes(s1, s2, min1, min2, h1, h2, d, w, goalMs)
            }, 1000);
        }, (1000 - (Date.now() % 1000)));

    setTimes(s1, s2, min1, min2, h1, h2, d, w, goalMs);

    function setTimes(s1, s2, min1, min2, h1, h2, d, w, goal) {
        var dif = goal - (Date.now() - 1000);
        if (dif >= 0) {
            var sT = Math.floor((dif / 1000)) % 60;
            s1.text(Math.floor(sT / 10));
            s2.text(sT % 10);

            var minT = Math.floor((dif / (1000 * 60))) % 60;
            min1.text(Math.floor(minT / 10));
            min2.text(minT % 10);

            var hT = Math.floor((dif / (1000 * 60 * 60))) % 24;
            h1.text(Math.floor(hT /10));
            h2.text(hT%10);

            dT = Math.floor((dif / (1000 * 60 * 60 * 24)));
            d.text(dT % 7);
            w.text(Math.floor(dT / 7));
        }
        else {
            clearInterval(interval);
            $(".countdown").html("<h1>Cännärit ovat täällä!</h1>");
        }
    }
});