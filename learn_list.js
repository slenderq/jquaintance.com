
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

    var title = "I did it"
    var date = "August 26th 2021"
    append_to_list_container(list_id, title, date)

}


function append_to_list_container(list_id, title, date) {
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
    document.getElementById(list_id).appendChild(list_item_div);
}
main()