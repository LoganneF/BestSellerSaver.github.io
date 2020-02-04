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
        //for list item 2
            document.getElementById("title2").innerHTML = result.results.lists["2"].books["2"].title
            document.getElementById("author2").innerHTML = result.results.lists["2"].books["2"].author
            document.getElementById("summary2").innerHTML = result.results.lists["2"].books["2"].description
            document.getElementById("rank2").innerHTML = result.results.lists["2"].books["2"].rank
            document.getElementById("image2").innerHTML = result.results.lists["2"].books["2"].book_image
        //for list item 3
            document.getElementById("title3").innerHTML = result.results.lists["3"].books["3"].title
            document.getElementById("author3").innerHTML = result.results.lists["3"].books["3"].author
            document.getElementById("summary3").innerHTML = result.results.lists["3"].books["3"].description
            document.getElementById("rank3").innerHTML = result.results.lists["3"].books["3"].rank
            document.getElementById("image3").innerHTML = result.results.lists["3"].books["3"].book_image
        //for list item 4
            document.getElementById("title4").innerHTML = result.results.lists["4"].books["4"].title
            document.getElementById("author4").innerHTML = result.results.lists["4"].books["4"].author
            document.getElementById("summary4").innerHTML = result.results.lists["4"].books["4"].description
            document.getElementById("rank4").innerHTML = result.results.lists["4"].books["4"].rank
            document.getElementById("image4").innerHTML = result.results.lists["4"].books["4"].book_image

    }).fail(function(err) {
        throw err;
        //need message to user. its super picky about titles
    });
}



document.getElementById('search').addEventListener('click', bookSearch, false);

$('.card').on('click', function(){
    $(this).toggleClass('show-description');
});
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



