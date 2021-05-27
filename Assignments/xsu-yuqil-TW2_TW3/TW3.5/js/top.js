function defaultRoute() {
  if (
    !["#search", "#summary", "#details"].find(
      (knowRoute) => knowRoute === window.location.hash
    )
  ) {
    window.location.hash = "#search";
  }
}


const summaryNav = {
  code:() => (window.location.hash = "#summary"), 
  label:"Summary"
};
const searchNav = {
  code:() => (window.location.hash = "#search"), 
  label:"Search"
};
const detailsNav = {
  code:() => (window.location.hash = "#details"), 
  label:"Details"
};
defaultRoute();

const Top={
    props:["model"],
    mounted(){
      window.addEventListener("hashchange", defaultRoute);
    },
    unmounted(){
      window.removeEventListener("hashchange", defaultRoute);
    },
    render(){
      return (
        <div>
            <div class="sidebar debug">
              <SidebarPresenter model={this.model} />
            </div> 

            <div class="mainContent">
              <div class="debug">
                <Show hash="#search">
                  <SearchPresenter model={this.model} summaryNav={summaryNav}  detailsNav={detailsNav}/>   
                </Show>
              </div>
             <div class="debug">
              <Show hash="#details">
                  <DetailsPresenter model={this.model} searchNav={searchNav}/>
                </Show>
             </div>

              <div class="debug">
                <Show hash="#summary">
                  <SummaryPresenter model={this.model} searchNav={searchNav}/>
                </Show>
               </div>

            </div>
        </div>
      )}
    

}