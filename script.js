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