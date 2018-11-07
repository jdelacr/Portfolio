window.onscroll = function () {scrollEvents(); scrollEvents2(); scrollEvents3();};

function scrollEvents() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.getElementById("Bio").className += " slideIn1";
        document.getElementById("Bio_Content").className += " slideIn2";
    }
    else {
        document.getElementById("Bio").className = "parallelogram";
        document.getElementById("Bio_Content").className = "content1";
    }
}

function scrollEvents2() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("Academics").className += " slideIn1";
        document.getElementById("Academic_Content").className += " slideIn2";
    }
    else {
        document.getElementById("Academics").className = "parallelogram";
        document.getElementById("Academic_Content").className = "content1";
    }
}

function scrollEvents3() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
        document.getElementById("Skills").className += " slideIn1";
        document.getElementById("Skill_Content").className += " slideIn2";
    }
    else {
        document.getElementById("Skills").className = "parallelogram";
        document.getElementById("Skill_Content").className = "content1";
    }
}