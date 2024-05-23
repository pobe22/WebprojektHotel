
var xhttpHeader = new XMLHttpRequest();
xhttpHeader.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
    }
};
xhttpHeader.open("GET", "/HTML/Hotel/header_hotel.html", true);
xhttpHeader.send();


var xhttpFooter = new XMLHttpRequest();
xhttpFooter.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
    }
};
xhttpFooter.open("GET", "/HTML/Hotel/footer_hotel.html", true);
xhttpFooter.send();

var xhttpNav = new XMLHttpRequest();
xhttpNav.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("nav").innerHTML = this.responseText;
    }
};
xhttpNav.open("GET", "/HTML/nav.html", true);
xhttpNav.send();
