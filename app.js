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
            document.getElementById("title").innerHTML = result.results.lists["0"].books["0"].title
            document.getElementById("author").innerHTML = result.results.lists["0"].books["0"].author
            document.getElementById("summary").innerHTML = result.results.lists["0"].books["0"].description
            document.getElementById("rank").innerHTML = result.results.lists["0"].books["0"].rank
            document.getElementById("image").innerHTML = result.results.lists["0"].books["0"].book_image
            
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



