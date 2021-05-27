function SidebarPresenter({model, detailsNav}) {
  const guests = useModelProp(model, "numberOfGuests");
  const dishes = useModelProp(model, "dinnerMenu");

  return <SidebarView guests={guests} 
      setGuests= { n => model.setNumberOfGuests(n) }
      dishes={dishes}
      removeDish={ dish => model.removeFromMenu(dish)}
      dishChoice={ id => {
        model.setCurrentDish(id);
        detailsNav.code();
      }}
  />
}