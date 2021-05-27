function SummaryPresenter(props) {
    const persons = useModelProp(props.model, "numberOfGuests");
    const menu = useModelProp(props.model, "dinnerMenu");
    return <SummaryView persons = {persons} menu={menu}/>
  }