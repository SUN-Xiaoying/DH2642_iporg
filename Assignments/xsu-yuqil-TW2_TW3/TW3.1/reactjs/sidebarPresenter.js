  function SidebarPresenter(props) {
    const guests = useModelProp(props.model, "numberOfGuests");
    const dishes = useModelProp(props.model, "dinnerMenu");

    return <SidebarView guests={guests} 
        setGuests= { n => props.model.setNumberOfGuests(n) }
        dishes={dishes}
        removeDish={ dish => props.model.removeFromMenu(dish)}
        dishChoice={ id => {
          props.model.setCurrentDish(id);
        }}
    />
}