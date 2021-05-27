function DetailsView(props){
    return(
        <div class="detail-container p-5">
            <div class="m-3">
                            
            <div class="detail-button">
                <button class="btn btn-success m-5" onClick={e => {props.dishAdded(); props.searchNav.code();}} disabled={props.isDishInMenu}>Add to menu!</button>
                <button class="btn btn-dark" onClick={e => {props.cancel();props.searchNav.code();}} disabled={!props.isDishInMenu}>Cancel</button>
            </div><hr/>
                <h4>{props.dish.title}</h4>
                <div class="detail-bar">
                    <img src={props.dish.image}></img>
                    <div class="detail-price">
                        <p>Price: $<b>{props.dish.pricePerServing.toFixed(2)}</b></p>
                        <p>for {props.people} guests: $<b>{(Number(props.dish.pricePerServing) * Number(props.people)).toFixed(2)}</b></p>
                    </div>
                </div>
                <br/>
                <div class="detail-ingredient">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Ingredients</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.dish.extendedIngredients.map(ingred =>
                                <tr key={ingred.id}>
                                    <td>{ingred.name}: </td>
                                    <td>{ingred.amount.toFixed(2)}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div class="detail-instruction">
                    {props.dish.instructions}
                </div>
                <div>
                    <a href={props.dish.sourceUrl}>More Information</a>
                </div>
            </div>
           
        </div>
    ) 
}
