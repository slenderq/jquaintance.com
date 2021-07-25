
function displayMouseOver(link_id, photo_src) {
    document.body.style.visibility = "hidden";
    document.getElementById(link_id).style.visibility = "visible";
    document.body.style.backgroundImage = "url('" + photo_src + "')";
}

// test
function mouseOverMLDev() { }

function mouseOverProject() { }

function mouseOverPhoto() {
    displayMouseOver("Photo", photos_img.src)
}
function mouseOverLearn() { }

function mouseLeave() {
    document.body.style.visibility = "visible"
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "";
}



function main_function() {
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
}

function newImage(src) {
    img = new Image();
    img.src = src;
    return img;
}

init()
main_function()