const $ = x => document.querySelectorAll(x);

function closeLearnMore() {
    localStorage.setItem("learnmoreClosed", "closed")
    $(".learnmore")[0].style.height = "0px";
    setTimeout(() => {
        $(".learnmore")[0].style.display = "none";
    }, 300);
}

function checkCookies() {
    if (localStorage.getItem("learnmoreClosed") == "closed") {
        $(".learnmore")[0].style.display = "none";
    }
}

checkCookies()

function expandNav() {
    navbar = $(".navbar-expanded")[0]
    if (navbar.style.left == "-400px") {
        navbar.style.left = "50px";
    } else{
        navbar.style.left = "-400px"
    }
}

function checkAnswer() {
    that = document.activeElement;
    if (that.innerHTML == "360 C") that.classList.add("correct");
    else that.classList.add("incorrect");
}

function checkIfFirstLoad() {
    userName = localStorage.getItem("username");
    if (userName == null) {
        window.location.href = 'setup.html';
    }
}