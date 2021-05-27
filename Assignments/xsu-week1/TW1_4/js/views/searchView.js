function SearchFormView(props){
    return(
        <div class="search-container">
            <input class="form-control search-bar" onChange={e=> props.onText(e.target.value) }></input>
            <select onChange={e=>props.onDishType(e.target.value)}>
                <option>Choose: </option>
                {props.options.map((opt) =>
                        <option class="dropdown-item">{opt}</option>
                )}
            </select>
            <button class="btn btn-outline-success my-2 my-sm-0"
                onClick={e=> props.onSearch(e.target.value)}>Search</button>
        </div>
    );
}
