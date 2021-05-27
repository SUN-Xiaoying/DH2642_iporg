const DishSource = {
  apiCall(params) {
    return fetch(BASE_URL+params, {
      "method" : "GET",
      "headers": {
        'X-Mashape-Key' : API_KEY
      }
    })
    // check HTTP response and throw an error if not okay (compose error msg from response.statusText)
    .then(response=>{ if(response.ok) { return response.json();}
         // from HTTP headers to HTTP response data
          else throw Error(response.statusText) })
    .catch(error => {
      console.log("There was a problem when fetching the data: ", error) });
  }
  ,
  searchByType(type, query) {
    return DishSource.apiCall("recipes/search?type=" + (type ? type : "") + "&query=" + (query ? query : "")); 
    ;
  }
  ,
  searchDishes(params) {
    return DishSource.apiCall(("recipes/search?" + new URLSearchParams(params))); 
  }
  ,
  getDishDetails(id) {
    return DishSource.apiCall("recipes/"+ id + "/information");
  }

};