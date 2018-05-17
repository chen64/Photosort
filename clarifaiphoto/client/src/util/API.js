import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

export default {
  flickrSearch: function(query) {

    var flickerApiKey = "2b85c680be8fe0b66443ea94abe08939";
    var flickerSecret = "4b36c92a87544403";

    var queryURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2b85c680be8fe0b66443ea94abe08939&text=" + searchText + "&per_page=20&format=json&nojsoncallback=1";
    return axios.get("/api/recipes", { params: { q: query } });


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
        })
  }

};




// module.exports = {
//     flickr: {
//         consumerKey: "0ef54a0b4c3507a8640222c30c526acc",
//         consumerSecret: "045f1f2bc1c9e358"
//     },
//     session:{
//         cookieKey: "whatareyoubuyen"
