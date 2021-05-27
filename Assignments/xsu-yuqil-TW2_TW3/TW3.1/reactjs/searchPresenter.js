function SearchPresenter(props){
    const [type, setType] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = React.useState(null);
    React.useEffect(()=>{setPromise(DishSource.searchDishes({}))}, []);

    const [data, error] = usePromise(promise);

    return(
        <React.Fragment>
            <SearchFormView
                onText={(q) => setQuery(q)}
                onType={(t) => setType(t)}
                onSearch={()=> setPromise(DishSource.searchDishes({type, query}))}
            />
            {promiseNoData(promise, data, error) || (
                <SearchResultView
                searchResults={data.results}
                dishChosen={id => {
                    props.model.setCurrentDish(id);
                }}
                />
            )}
        </React.Fragment>
    )
}