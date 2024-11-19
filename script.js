// JavaScript Code to wrap each letter in a <span> tag for animation
window.onload = function() {
    // Initialize tabs
    initializeTabs();
    
    // Wrap each letter of name in <span> tag for animation
    animateNameLetters();
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
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Function to wrap each letter of name in a <span> tag for animation
function animateNameLetters() {
    // Wrap letters of 'Ganesh'
    document.querySelectorAll('#ganesh').forEach(name => {
        name.innerHTML = name.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
    });

    // Wrap letters of 'Kodihalli'
    document.querySelectorAll('#kodihalli').forEach(name => {
        name.innerHTML = name.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
    });
}
