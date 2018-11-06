window.onscroll = function () {scrollEvents();};

function scrollEvents() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.getElementById("Bio").className += " slideIn1";
    }
    else {
        document.getElementById("Bio"). className = "parallelogram";
    }


}