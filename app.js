$( () => {
let bookSearch = ()=> {
    let search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);

    let url = "https://api.nytimes.com/svc/books/v3/lists/names.json";
    url += '?' + $.param({
        'api-key': "7MkGrlwoGBxaAQWbjSxBpKucWrQqaSiG",
        'q': search
    });

    $.ajax({
        url: url, 
        method: 'GET',
    }).done(function(result){
        console.log(result);
            document.getElementById("headline").innerHTML = result.response.docs["0"].headline.main;
    }).fail(function(err) {
        throw err;
    });
}

document.getElementById('button').addEventListener('click', bookSearch, false);


});




