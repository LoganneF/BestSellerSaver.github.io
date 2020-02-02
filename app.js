$(() =>{
let bookSearch = ()=> {
    let search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);

    let url = "https://api.nytimes.com/svc/books/v3/reviews.json";
    url += '?' + $.param({
        'title': search,
        'api-key': "7MkGrlwoGBxaAQWbjSxBpKucWrQqaSiG",
        
    });

    $.ajax({
        url: url, 
        method: 'GET',
    }).done(function(result){
        console.log(result);
            document.getElementById("title").innerHTML = result.results["0"].book_title;
            document.getElementById("author").innerHTML = result.results["0"].book_author;
            document.getElementById("summary").innerHTML = result.results["0"].summary;
            document.getElementById("byline").innerHTML = result.results["0"].byline;
    }).fail(function(err) {
        throw err;
        //need message to user. its super picky about titles
    });
}



document.getElementById('button').addEventListener('click', bookSearch, false);

});






