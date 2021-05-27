function defaultRoute(){
  if(
    !["#search", "#summary", "#details"].find(
      (knowRoute) => knowRoute === window.location.hash
    )
  ){
    window.location.hash="#search";
  }
}
defaultRoute();

function App(props) {

  React.useEffect(()=>{
    window.addEventListener("hashchange", defaultRoute);
    return ()=> window.removeEventListener("hashchange", defaultRoute);
  }, []);

  return (
    <React.Fragment>

      <div class = "flexParent">
          <div class = "sidebar debug">
              <SidebarPresenter model={props.model} />
          </div>
        
          <div class = "mainContent">
            <Show hash="#search">
              <SearchPresenter model={props.model} />   
            </Show>
            <Show hash="#details">
              <DetailsPresenter model={props.model}/>
            </Show>
            <Show hash="#summary">
              <SummaryPresenter model={props.model}/>
            </Show>
          </div>
      </div>
    </React.Fragment>

  )
}

