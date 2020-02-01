console.log("Its working");

const bookSearch = ()=> {
    console.log("this function runs!")
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