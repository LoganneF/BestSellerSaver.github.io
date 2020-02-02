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
            document.getElementById("headline").innerHTML = result.results["0"].book_title;
    }).fail(function(err) {
        throw err;
    });
}



document.getElementById('button').addEventListener('click', bookSearch, false);

});






