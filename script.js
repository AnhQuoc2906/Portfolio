var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById('sideMenu');
var languageAll = document.getElementsByClassName('language');

//Set timestamp
var date = new Date;
document.getElementById('timestamp_en').value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
document.getElementById('timestamp_vi').value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}

function language(lang) {
    for (let i = 0; i < languageAll.length; i++) {
        languageAll[i].style.display = 'none';
    }
    const selectedLanguageElement = document.getElementById(lang);
    if (selectedLanguageElement) {
        selectedLanguageElement.style.display = 'block';
        selectedLanguageElement.style.animation = 'transitionIn 0.5s forwards';
        date = new Date;
        document.getElementById('timestamp_'+lang).value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}