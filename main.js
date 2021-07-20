
function mouseOverMLDev() { console.log("hover!"); }
function mouseOverProject() { }
function mouseOverPhoto() { }
function mouseOverLearn() { }
function mouseLeave() { console.log("leave"); }


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