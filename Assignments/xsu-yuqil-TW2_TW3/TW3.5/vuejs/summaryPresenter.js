// const SummaryPresenter={
//   props:["model", "searchNav"],
//   render(){
//     console.log("Render summary");
//     return <SummaryView persons={this.model.numberOfGuests} 
//       menu={this.model.dinnerMenu} 
//       searchNav={this.searchNav}/>
//   }
// }

function SummaryPresenter({model, searchNav}) {
  console.log("Render summary");
    return <SummaryView persons={model.numberOfGuests} 
      menu={model.dinnerMenu} 
      searchNav={searchNav}/>
}