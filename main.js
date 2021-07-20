
function mouseOverMLDev() { }

function mouseOverProject() { }

function mouseOverPhoto() {
    // document.body.style.visibility = "hidden";
    // document.getElementById("Photo").visibility = "visible";
    document.body.style.backgroundImage = "url('images/photos.jpg')";
}
function mouseOverLearn() { }

function mouseLeave() {
    // document.body.style.visibility = "visible"
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

main_function()