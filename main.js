

var mouse_over_element = null

function displayMouseOver(link_id, photo_src) {
    document.body.style.visibility = "hidden";
    document.getElementById(link_id).style.visibility = "visible";
    document.body.style.backgroundImage = "url('" + photo_src + "')";
    mouse_over_element = link_id
}

function mouseOverMLDev() {
    displayMouseOver("MLDev", mldev_img.src)
}

function mouseOverProject() {
    displayMouseOver("Project", projects_img.src)
}

function mouseOverPhoto() {
    displayMouseOver("Photo", photos_img.src)
}
function mouseOverLearn() {
    displayMouseOver("Learn", learn_img.src)
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

function init() {
    // get ready to display link....

    document.body.style.backgroundImage = "";
    photos_img = newImage('images/photos.jpg')
    mldev_img = newImage('images/desktop.jpg')
    projects_img = newImage('images/vscode.png')
    learn_img = newImage('images/learn.jpg')
}

function newImage(src) {
    img = new Image();
    img.onload = function () { console.log(src + ' loaded') };
    img.onerror = function () { console.log('error') }
    img.src = src;

    return img;
}


init()
main()