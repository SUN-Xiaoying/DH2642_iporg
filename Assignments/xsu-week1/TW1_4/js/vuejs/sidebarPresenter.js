function SidebarPresenter(props) {
  return <SidebarView guests ={props.model.numberOfGuests}
                      setGuests = {x => props.model.numberOfGuests=x} />
}