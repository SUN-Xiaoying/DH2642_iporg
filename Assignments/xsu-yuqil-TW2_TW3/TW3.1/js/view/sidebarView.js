  
const types=["starter", "main course", "dessert"];
function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
      return tp[0];
    return "";
}

function totalPrice(people, dishes){
    let total=0;
    dishes.map(dish=>
        total = dish.pricePerServing * people
    );
    return total;
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if (ai == bi) return 0;
    else return ai>bi ? 1 : -1;
}

function SidebarView({
    guests, 
    setGuests,
    dishes,
    removeDish,
    dishChosen,
    resultChoice
}) {
  return (
    <div class="sidebar-container">
        <button class="btn" onClick={ e => setGuests(guests-1)} disabled={guests<=1}>-</button>
        <span class="m-2">{guests}</span>
        <button class="btn" onClick={ e => setGuests(guests+1)} disabled={guests>=5}>+</button>
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
                {dishes.sort(compareDishes).map(dish =>
                    <tr key={dish.id}>
                        <td><button class="btn btn-xs btn-danger" onClick={e => removeDish(dish)} >X</button></td>
                        <td><a href={dish.sourceUrl} onClick={e=>{dishChoice(dish.id);e.preventDefault();}}>{dish.title}</a></td>
                        <td>
                            <label>{dishType(dish)}</label>    
                        </td>
                        <td>${dish.pricePerServing.toFixed(2)}</td>
                    </tr>
                )}  
                <tr>
                    <td>Total: </td>
                    <td></td>
                    <td>$<b>{totalPrice(guests, dishes).toFixed(2)}</b></td>
                    <td></td>
                </tr>
            </tbody>
          </table> 
    </div>
  );
}

