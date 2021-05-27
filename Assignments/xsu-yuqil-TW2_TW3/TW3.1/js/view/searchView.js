const SearchFormView = ({onSearch, onType, onText}) => {

  const options = ["starter", "main course", "dessert"].map((opt)=> (
    <option key={opt} value={opt}> {opt} </option>
  ));

  return(
      <div class="search-container input-group p-3 m-2">
        <div class="col-xs-2 ">
        <input type="search" class="form-control rounded" placeholder="pizza" onChange={e => onText(e.target.value) }></input>
        </div>
          <div class="input-group-append">
              <select class="form-select" onChange={e => onType(e.target.value)}>
                  {options}
              </select>
              <button type="button" class="btn btn-outline-primary" onClick={e=> onSearch()}>Search</button>
          </div>
      </div>
  );
}


const SearchResultView = ({searchResults, dishChosen}) => {
  return (
    <div class="searchResult-container m-2 ">
      {searchResults.map(dish =>{
        return(
          <span class="searchResult" 
            key={dish.id} 
            onClick={()=>dishChosen(dish.id)}>
              <img class="search-image" src={`https://spoonacular.com/recipeImages/${dish.image}`}/>
              <center>{dish.title}</center>
          </span>
        );
      })}
  </div>

  );
}