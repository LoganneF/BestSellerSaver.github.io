console.log("Its working");

const bookSearch = ()=> {
    var search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);

    $.ajax({
        url: "https//www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        type: "GET",

        success: function(data) {
            console.log(data)
        },

      
    });
}

document.getElementById('button').addEventListener('click', bookSearch, false);

google.books.load();

function initialize() {
  var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
  viewer.load('ISBN:0738531367');
}

google.books.setOnLoadCallback(initialize);

$( () => {


});


//google api key = AIzaSyBJYaK4RGQCnknSQWyjqRBBdD3gLEIpuAUs