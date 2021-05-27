function SummaryPresenter({model, searchNav}) {
    const persons = useModelProp(model, "numberOfGuests");
    const menu = useModelProp(model, "dinnerMenu");
    return <SummaryView persons={persons} menu={menu} searchNav={searchNav}/>
  }