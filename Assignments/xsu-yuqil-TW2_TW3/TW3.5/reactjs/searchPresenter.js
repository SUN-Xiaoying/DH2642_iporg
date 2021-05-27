function SearchPresenter({model, summaryNav, detailsNav}){
    const [type, setType] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = React.useState();
    
    React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);

    const [data, error] = usePromise(promise);
    return(
        <React.Fragment>
            <SearchFormView
                onText={(q) => setQuery(q)}
                onType={(t) => setType(t)}
                onSearch={()=> setPromise(DishSource.searchDishes({type, query}))}
                summaryNav={summaryNav}
            />
            {promiseNoData(promise, data, error) || (
                <SearchResultView
                searchResults={data.results}
                dishChosen={id => {
                    model.setCurrentDish(id);

                }}
                detailsNav={detailsNav}
                />
            )}
        </React.Fragment>
    )
}