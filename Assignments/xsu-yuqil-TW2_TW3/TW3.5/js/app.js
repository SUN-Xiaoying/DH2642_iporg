function defaultRoute(){
  const [route, setRoute] = React.useState(window,location.hash);
  if(!["#search", "#summary", "#details"].find((knowRoute) => knowRoute === window.location.hash)){
    window.location.hash="#search";
  }else
    window.addEventListener("hashchange", ()=> {setRoute(window.location.hash);})
}

function App({model}) {
  const detailsNav= {label:"Details", code:()=>window.location.hash ="#details"};
  const searchNav ={label:"Back to Search", code:()=>window.location.hash="#search"};
  const summaryNav ={label:"Summary", code:()=>(window.location.hash="#summary")};

  defaultRoute();
  return (
    <React.Fragment>

      <div class = "flexParent">
          <div class = "sidebar debug">
              <SidebarPresenter model={model} detailsNav={detailsNav}/>
          </div>
        
          <div class = "mainContent debug">
            <Show hash="#search">
              <SearchPresenter model={model} summaryNav={summaryNav}  detailsNav={detailsNav}/>   
            </Show>
            <Show hash="#details">
              <DetailsPresenter model={model} searchNav={searchNav}/>
            </Show>
            <Show hash="#summary">
              <SummaryPresenter model={model} searchNav={searchNav}/>
            </Show>
          </div>
      </div>
    </React.Fragment>

  )
}

