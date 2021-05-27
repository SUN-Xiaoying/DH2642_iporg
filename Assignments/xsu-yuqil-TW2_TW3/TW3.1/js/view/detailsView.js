
function totalPrice(dish, people){
    return people * dish.pricePerServing 
}

function DetailsView(props){
    return(
        <div class="detail-container p-5">
            <div class="m-3">
                <h4>{props.dish.title}</h4>
                <div class="detail-bar">
                    <img src={props.dish.image}></img>
                    <div class="detail-price">
                        <p>Price: $<b>{props.dish.pricePerServing.toFixed(2)}</b></p>
                        <p>for {props.people} guests: $<b>{totalPrice(props.dish, props.people).toFixed(2)}</b></p>
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
            
            <div class="detail-button">
                <button class="btn btn-success m-5" onClick={() => {props.dishAdded(props.dish); }} disabled={props.isDishInMenu}>Add to menu!</button>
                <button class="btn btn-dark" onClick={() => {props.cancel(props.dish);}} disabled={!props.isDishInMenu}>Cancel</button>
            </div>
           
        </div>
    ) 
}
