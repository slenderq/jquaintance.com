

var mouse_over_element = null

function displayMouseOver(link_id, photo_src) {
    document.body.style.visibility = "hidden";
    document.getElementById(link_id).style.visibility = "visible";
    document.body.style.backgroundImage = "url('" + photo_src + "')";
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

function init() {
    // get ready to display link....

    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "";
    photos_img = newImage('images/photos.jpg')
    mldev_img = newImage('images/desktop.jpg')
    projects_img = newImage('images/vscode.png')
    learn_img = newImage('images/learn.jpg')

    // HACK: Preload the backgrounds by hovering them before!
    mouseOverMLDev()
    mouseLeave()

    mouseOverProject()
    mouseLeave()

    mouseOverPhoto()
    mouseLeave()

    mouseOverLearn()
    mouseLeave()

    // document.body.style.backgroundImage = "";
    // document.body.style.backgroundColor = "#000000";
}

images = []

function newImage(src) {
    img = new Image();
    img.onload = function () { console.log(src + ' loaded') };
    img.onerror = function () { console.log('error') }
    images.push(img);
    img.src = src;
    // document.body.style.backgroundImage = "url('" + src + "')";

    return img.src;
}


init()
main()