

function Top(props) {
    return (
      <React.Fragment>
  
        <div>
            <div class="left">
                <DetailsPresenter model={props.model}/>
            </div> 

            <div class="right">
                <SearchPresenter model={props.model} />
            </div>

        </div>
      </React.Fragment>
  
    )
  }