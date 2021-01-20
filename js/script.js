var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.lastDeletingStatus = 0;
    this.isDeleting = 0;
};
var timer;
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];



    if (this.isDeleting === 1) {

        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    if (this.loopNum === 4) {
        document.getElementById("name").style.display = "none";
        document.getElementById("continue").style.display = "block";
        document.getElementById("continue").style.visibility = "visible";
        document.getElementById("continue").style.opacity = 1;
        return;
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting === 1) {
        delta /= 2;
    }
    if (this.isDeleting === 0 && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = 1;
    } else if (this.isDeleting === 1 && this.txt === '') {
        this.isDeleting = 0;
        this.loopNum++;
        delta = 500;
    }

    if (this.isDeleting !== 2) {
        timer = setTimeout(function() {
            that.tick();
        }, delta);
    }
};

TxtType.prototype.toggleStart = function() {
    //start back up 
    if (this.isDeleting === 2) {
        this.isDeleting = this.lastDeletingStatus;
        this.lastDeletingStatus = 2;
    }
    //stop
    else {
        this.lastDeletingStatus = this.isDeleting;
        this.isDeleting = 2;
        clearTimeout(timer);
    }
}
var toggleStart = function() {
    txtType.toggleStart();
    txtType.tick();
}
var txtType;

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');

    for (var i = 0; i < elements.length; i++) {

        var toRotate = elements[i].getAttribute('data-type');

        var period = elements[i].getAttribute('data-period');

        txtType = new TxtType(elements[i], JSON.parse(toRotate), period);
    }

};
var x = 0;

function showNav(id) {
    if (id == "nav-btn-mobile") {
        document.getElementById("nav-btn-mobile").style.display = "none"
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = 1;
        document.getElementById("navbar").style.width = "300px";
        document.body.style.background = "rgba(0,0,0,0.9)";
    } else {
        document.getElementById("navbtn-space").style.visibility = "hidden";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = 1;
        document.getElementById("navbar").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
        document.body.style.background = "rgba(0,0,0,0.9)";
    }

}

function hideNav() {
    var width = document.body.clientWidth;
    if (width <= 600) {
        document.getElementById("nav-btn-mobile").style.display = "block";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = 0;
        document.getElementById("navbar").style.width = "0px";
        document.body.style.background = "black";
    } else {
        document.getElementById("navbtn-space").style.opacity = 1;
        document.getElementById("navbtn-space").style.visibility = "visible";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = 0;
        document.getElementById("navbar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        document.body.style.background = "black";
    }
}

function toggleMax() {
    if (document.getElementById("navbar").style.width == "95%") {
        document.getElementById("navbar").style.width = "300px";
        document.getElementById("navbar").style.alignItems = "end";
        document.getElementById("max").style.transform = "rotate(0deg)";
    } else {
        document.getElementById("navbar").style.width = "95%";
        document.getElementById("navbar").style.alignItems = "center";
        document.getElementById("max").style.transform = "rotate(180deg)";
    }

}

function toggleMin() {
    if (document.getElementById("navbar").style.height == "100px") {
        document.getElementById("navbar").style.top = "0%";


        document.getElementById("navbar").style.height = "100%";
        document.getElementById("min").style.transform = "rotate(0deg)";
    } else {
        document.getElementById("navbar").style.top = "90%";

        document.getElementById("navbar").style.height = "100px";
        document.getElementById("min").style.transform = "rotate(180deg)";
    }
}

function hideNseek() {

    document.getElementById("container").style.display = "none";
    var y = document.getElementsByClassName("division");

    for (var i = 0; i < y.length; i++) {

        //stuff(y[i], i);
        y[i].style.display = "flex";
    }

    document.getElementsByTagName("header")[0].style.display = "flex";
}

function stuff(x, z) {
    setTimeout(function() {
        x.style.display = "flex";
    }, 5000 * z)
}

function redirect(id) {
    if (id == "git0" || id == "git1" || id == "git2") {
        window.open("https://github.com/ad1tya-v3rma");
    } else if (id == "mail0" || id == "mail1" || id == "mail2") {
        window.location.href = "mailto:aditya.verma8842@protonmail.com";
    } else if (id == "hr0" || id == "hr1") {
        window.open("https://www.hackerrank.com/ASSASS1N666");
    } else if (id == "insta0" || id == "insta1" || id == "insta2") {
        window.open("https://www.instagram.com/iamaditya1998");
    } else if (id == "fb0" || id == "fb1" || id == "fb2") {
        window.open("https://www.facebook.com/aditya.verma.75491856");
    } else if (id == "ln0" || id == "ln1" || id == "ln2") {
        window.open("https://www.linkedin.com/in/aditya-verma-aa4362191/");
    }

}
