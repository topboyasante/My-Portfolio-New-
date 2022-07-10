//Dark Mode
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',function switchMode(){
    document.body.classList.toggle('dark');
})
//Make The Sections Appear and disappear

document.getElementById('about').style.opacity = "0";
document.getElementById('tools').style.opacity = "0";
document.getElementById('projects').style.opacity = "0";
document.getElementById('contact').style.opacity = "0";

function toggleSection(){
    document.getElementById('home').style.opacity= "1";
    document.getElementById('about').style.opacity = "0";
    document.getElementById('tools').style.opacity = "0";
    document.getElementById('projects').style.opacity = "0";
    document.getElementById('contact').style.opacity = "0";
}
function toggleSection01(){
    document.getElementById('home').style.opacity = '0';
    document.getElementById('about').style.opacity = "1";
    document.getElementById('tools').style.opacity = "0";
    document.getElementById('projects').style.opacity = "0";
    document.getElementById('contact').style.opacity = "0";
}
function toggleSection02(){
    document.getElementById('home').style.opacity = '0';
    document.getElementById('about').style.opacity = "0";
    document.getElementById('tools').style.opacity = "1";
    document.getElementById('projects').style.opacity = "0";
    document.getElementById('contact').style.opacity = "0";
}
function toggleSection03(){
    document.getElementById('home').style.opacity = '0';
    document.getElementById('about').style.opacity = "0";
    document.getElementById('tools').style.opacity = "0";
    document.getElementById('projects').style.opacity = "1";
    document.getElementById('contact').style.opacity = "0";
}
function toggleSection04(){
    document.getElementById('home').style.opacity = '0';
    document.getElementById('about').style.opacity = "0";
    document.getElementById('tools').style.opacity = "0";
    document.getElementById('projects').style.opacity = "0";
    document.getElementById('contact').style.opacity = "4";
}
