//search engine
fetch("search.json")
  .then(response => response.json())
  .then(json => console.log(json));