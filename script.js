// JavaScript Code

window.onload = function() {
    // Initialize tabs
    initializeTabs();
};

function initializeTabs() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Initially deactivate all tabs and contents
    for(var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for(var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Activate the first tab and its content
    if(tablinks.length > 0) {
        tablinks[0].classList.add("active-link");
    }
    if(tabcontents.length > 0) {
        tabcontents[1].classList.add("active-tab");
    }
}

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
