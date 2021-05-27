  
const types=["starter", "main course", "dessert"];

function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
      return tp[0];
    return "";
}


function getSum(total, dish){
    return total + dish.pricePerServing;
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if (ai == bi) return 0;
    else return ai>bi ? 1 : -1;
}

function SidebarView(props) {
  return (
    <div class="sidebar-container">
        <button class="btn" onClick={ e => props.setGuests(props.guests-1)} disabled={props.guests<=1}>-</button>
        <span class="m-2">{props.guests}</span>
        <button class="btn" onClick={ e => props.setGuests(props.guests+1)} >+</button>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">name</th>
                    <th scope="col">type</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
            <tbody>
            {props.dishes.sort(compareDishes).map(dish =>
                    <tr key={dish.id}>
                        <td><button class="btn btn-xs btn-danger" onClick={e => props.removeDish(dish)} >X</button></td>
                        <td><a href="#details" onClick={e=>{props.dishChoice(dish.id);e.preventDefault();}}>{dish.title}</a></td>
                        <td>
                            <label>{dishType(dish)}</label>    
                        </td>
                        <td>${dish.pricePerServing.toFixed(2)}</td>
                    </tr>
                )}  
                <tr>
                    <td>Total: </td>
                    <td></td>
                    <td>$<b>{(props.dishes.reduce(getSum, 0)* props.guests).toFixed(2)}</b></td>
                    <td></td>
                </tr>
            </tbody>
          </table> 
    </div>
  );
}

