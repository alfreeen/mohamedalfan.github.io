if (/Mobi|Android/i.test(navigator.userAgent)) {
    alert("You can use a desktop for a better experience. (ٱلسَّلَامُ عَلَيْكُمْ)");
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ----------------------- Side Menu -----------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// ----------------------- Google Sheet Contact Form -----------------------

const scriptURL = "https://script.google.com/macros/s/AKfycbyFLj-aeKMamAnUDR0pPmRPz6IYoNpD9L7XqQgbUMaiIru9b3sEJB2GNcv-tasEQxjEDg/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        msg.innerHTML = "Sending...";

        fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            body: new FormData(form)
        })
        .then(function() {
            msg.innerHTML = "Message sent successfully!";
            form.reset();

            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(function(error) {
            msg.innerHTML = "Something went wrong. Please try again.";
            console.error("Error!", error);
        });
    });
}
