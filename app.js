$(() =>{
let bookSearch = ()=> {
    let search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);

    let url = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
    url += '?' + $.param({
        'published_date': search,
        'api-key': "7MkGrlwoGBxaAQWbjSxBpKucWrQqaSiG",
        
    });

    $.ajax({
        url: url, 
        method: 'GET',

    }).done(function(result){
        console.log(result);
        // for list item 0
            document.getElementById("title0").innerHTML = result.results.lists["0"].books["0"].title
            document.getElementById("author0").innerHTML = result.results.lists["0"].books["0"].author
            document.getElementById("summary0").innerHTML = result.results.lists["0"].books["0"].description
            document.getElementById("rank0").innerHTML = result.results.lists["0"].books["0"].rank
            document.getElementById("image0").innerHTML = result.results.lists["0"].books["0"].book_image
        //for list item 1
            document.getElementById("title1").innerHTML = result.results.lists["1"].books["1"].title
            document.getElementById("author1").innerHTML = result.results.lists["1"].books["1"].author
            document.getElementById("summary1").innerHTML = result.results.lists["1"].books["1"].description
            document.getElementById("rank1").innerHTML = result.results.lists["1"].books["1"].rank
            document.getElementById("image1").innerHTML = result.results.lists["1"].books["1"].book_image
    }).fail(function(err) {
        throw err;
        //need message to user. its super picky about titles
    });
}



document.getElementById('button').addEventListener('click', bookSearch, false);

});

// DRAG/DROP JS
let id ;

function allowDrop (ev) {
    ev.preventDefault();
}

function dragStart (ev) {
    id=ev.target.id;
    //alert(id);
}

function drop (ev) {
    ev.target.append(document.getElementById(id));
}



