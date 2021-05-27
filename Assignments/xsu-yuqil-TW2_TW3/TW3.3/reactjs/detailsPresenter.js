function DetailsPresenter({model, searchNav}){
    const currentDish= useModelProp(model, "currentDish");
    const [promise, setPromise] = React.useState();
    const guests = useModelProp(model, "numberOfGuests");
    const menu = useModelProp(model, "dinnerMenu");
    
    const [data, error]=usePromise(promise);

    React.useEffect(()=> {
        currentDish && setPromise(DishSource.getDishDetails(currentDish))
    }, [currentDish]);

    return (
        <React.Fragment>
            {promiseNoData(promise, data, error) || (
                <DetailsView 
                people={guests}
                dish={data} 
                isDishInMenu={menu.some(k => k.id == data.id)}
                dishAdded={() =>{
                    model.addToMenu(data);
                }}
                cancel={() => {
                    model.removeFromMenu(data);
                }}
                searchNav={searchNav}
                />
            )}

        </React.Fragment>
    )

}