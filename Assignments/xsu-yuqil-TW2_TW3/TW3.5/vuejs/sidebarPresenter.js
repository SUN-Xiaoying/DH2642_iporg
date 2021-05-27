const SidebarPresenter= {
  props:["model", "detailsNav"],
  render(){
    return <SidebarView guests={this.model.numberOfGuests} 
    dishes={this.model.dinnerMenu}
    setGuests = { x => this.model.numberOfGuests=x }
    removeDish={ dish => this.model.removeFromMenu(dish)}
    dishChoice={ id => {
      this.model.setCurrentDish(id);
      this.detailsNav.code();
    }}
  
    />
  }

}