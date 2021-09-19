
// var fs = require('fs');

function main() {

    list_id = "list"

    var main = new Vue({
        el: '#list',
        data: {},
        methods: {},
        beforeMount() {
            console.log("yeet")

        }
    })

    // https://stackoverflow.com/questions/31274329/get-list-of-filenames-in-folder-with-javascript
    // var files = fs.readdirSync('/posts/')

    // console.log(files)

    var title = "I did it"
    var date = "August 26th 2021"
    var link = "lol"
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)
    append_to_list_container(list_id, title, date, link)

}


function append_to_list_container(list_id, title, date, link) {
    // https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript

    var list_item_div = document.createElement("div");
    list_item_div.setAttribute('class', "list_item");

    title_div = document.createElement("div");
    title_div.setAttribute('class', "list_title");
    title_div.innerHTML = title;

    date_div = document.createElement("div");
    date_div.setAttribute('class', "date");
    date_div.innerHTML = date;


    title_div.appendChild(date_div);
    list_item_div.appendChild(title_div);

    // adding and break
    break_element = document.createElement("br");
    list_item_div.appendChild(break_element);

    document.getElementById(list_id).appendChild(list_item_div);


}
main()