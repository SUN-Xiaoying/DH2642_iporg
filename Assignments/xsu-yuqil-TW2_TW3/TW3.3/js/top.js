

function Top(props) {
    return (
      <React.Fragment>
  
        <div>
            <div class="left">
                <DetailsPresenter model={props.model}/>
            </div> 

            <div class="right">
                <SidebarPresenter model={props.model} />
            </div>

        </div>
      </React.Fragment>
  
    )
  }