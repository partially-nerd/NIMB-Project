const $ = x => document.querySelectorAll(x);

const captionDom = $(".caption")[0];
const credentials = $(".credentials-wrapper")[0];
const pfp = $(".profile-picture")[0];

function bodyReady() {
    setTimeout(() => {
        $(".setting-things-up")[0].style.opacity = 0;
    }, 5000);
    setTimeout(() => {
        $(".setting-things-up")[0].style.display = "none";
    }, 5600);
}

function caption(text, then = null, time = 5000) {
    captionDom.innerHTML = text;
    captionDom.style.opacity = "1";
    setTimeout(() => {
        captionDom.style.opacity = "0";
        setTimeout(() => {
            if (then !== null) then();
        }, 600);
    }, time);
}

caption("We're getting things ready for you!", () => {
    caption("Fill in your credentials");
    credentials.style.visibility = "visible";
    credentials.style.opacity = 1;
})

function submit(e) {
    if (e.key == "Enter") {
        localStorage.setItem("username", $("#uname")[0].value);
        localStorage.setItem("realname", $("#rname")[0].value);
        localStorage.setItem("password", $("#pass")[0].value);

        credentials.style.opacity = 0;
        setTimeout(() => {
            credentials.style.visibility = "hidden";
            caption("Fill in your profile picture");
            pfp.style.visibility = "visible";
            pfp.style.opacity = 1;
        }, 300);
    }
}

function finalize() {
    // localStorage.setItem("pfpurl", $("#pfp-selector")[0].value);
    caption("Finalizing things...", () => {
        location.href = "index.html";
        
    })
}

$("#pfp-selector")[0].addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
    var curFiles = $("#pfp-selector")[0].files;
    var file = curFiles[0];
    $(".pfp-display")[0].src = URL.createObjectURL(file);
    localStorage.setItem("pfp", URL.createObjectURL(file))
}
