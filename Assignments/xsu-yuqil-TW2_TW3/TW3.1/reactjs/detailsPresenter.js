function DetailsPresenter(props){
    const currentDish= useModelProp(props.model, "currentDish");
    const [promise, setPromise] = React.useState();
    const guests = useModelProp(props.model, "numberOfGuests");
    const menu = useModelProp(props.model, "dinnerMenu");
    
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
                //isDishInMenu = {isDishInMenu}
                isDishInMenu={menu.some(k => k.id == data.id)}
                dishAdded={dish =>{
                    props.model.addToMenu(dish);
                }}
                cancel={dish => {
                    props.model.removeFromMenu(dish);
                }}
                />
            )}

        </React.Fragment>
    )

}