

var mouse_over_element = null

function displayMouseOver(link_id, photo_src) {
    // Set everything to hidden
    document.body.style.visibility = "hidden";
    // https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
    // consider doing this...
    // Only set the text to visible
    document.getElementById(link_id).style.visibility = "visible";

    // set the background image
    document.body.style.backgroundImage = "url('" + photo_src + "')";

    // keep track of what we selected
    mouse_over_element = link_id
}

function mouseOverMLDev() {
    displayMouseOver("MLDev", mldev_img)
}

function mouseOverProject() {
    displayMouseOver("Project", projects_img)
}

function mouseOverPhoto() {
    displayMouseOver("Photo", photos_img)
}
function mouseOverLearn() {
    displayMouseOver("Learn", learn_img)
}

function mouseLeave() {
    document.body.style.visibility = "visible"

    document.getElementById(mouse_over_element).style.visibility = null;
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "";
}


function main() {

    var main = new Vue({
        el: '#main',
        data: {},
        methods: {
            MouseLeave: mouseLeave,
            MouseOverMLDev: mouseOverMLDev,
            MouseOverProject: mouseOverProject,
            MouseOverPhoto: mouseOverPhoto,
            MouseOverLearn: mouseOverLearn,
        }
    })
}

function run_init() {

    init(main)
}

function init(_callback) {
    // get ready to display link....

    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "";
    photos_img = newImage('images/photos.jpg');
    mldev_img = newImage('images/desktop.jpg');
    projects_img = newImage('images/vscode.png');
    learn_img = newImage('images/learn.jpg');

    _callback();

}

images = []

function newImage(src) {
    hiddenDiv = document.getElementById("hiddenImages")
    img = new Image();
    img.onload = function () { console.log(src + ' loaded') };
    img.onerror = function () { console.log('error') }
    hiddenDiv.appendChild(img);
    images.push(img);
    img.src = src;

    return img.src;
}

document.addEventListener('DOMContentLoaded', function () {
    // handle DOMContentLoaded event
    run_init()
});
