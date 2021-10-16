
// var fs = require('fs');



function main() {


    var main = new Vue({
        el: '#list',
        data: {},
        methods: {},
        beforeMount() {

        }
    })

    // https://stackoverflow.com/questions/31274329/get-list-of-filenames-in-folder-with-javascript
    // paths = fetch_json("blog_post_list.json", loaded_json_callback)

    list_id = "list"

    // TODO: Make this hook actually run on git commit
    append_to_list_container(list_id, "When should I use a class vs a function?", "September 22, 2020", "posts/classes.html")

}

// function loaded_json_callback(paths) {


//     var date = "August 26th 2021"
//     var link = "lol"
//     console.log(paths)
//     for (const p of paths) {

//         append_to_list_container(list_id, p, date, link)



//     }
//     // var title = "I did it"
//     // var date = "August 26th 2021"
//     // var link = "lol"
//     // append_to_list_container(list_id, title, date, link)

// }


function fetch_json(path, callback) {

    var result
    fetch(path)
        .then(res => res.json())
        .then(data => {
            callback(data)
        }).catch(err => {
            console.error('Error: ', err);
        });

    return result;
}

function append_to_list_container(list_id, title, date, link) {
    // https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript

    var list_item_div = document.createElement("div");
    list_item_div.setAttribute('class', "list_item");

    title_div = document.createElement("div");
    title_div.setAttribute('class', "list_title");

    link_a = document.createElement("a");
    link_a.setAttribute('class', "link");
    link_a.setAttribute('href', link);
    link_a.innerHTML = title;

    date_div = document.createElement("div");
    date_div.setAttribute('class', "date");
    date_div.innerHTML = date;


    title_div.appendChild(link_a);
    title_div.appendChild(date_div);
    list_item_div.appendChild(title_div);

    // adding and break
    break_element = document.createElement("br");
    list_item_div.appendChild(break_element);

    document.getElementById(list_id).appendChild(list_item_div);


}
main()
