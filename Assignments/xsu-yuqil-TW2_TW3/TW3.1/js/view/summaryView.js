function compareIngredients(a,b){
  if(a.aisle < b.aisle)
   return -1;
  else if (a.aisle > b.aisle) 
   return 1;
  else {
    
      if (a.name === b.name) {
        try {
          throw 'there\'s a bug';
        } catch(e) {
          console.log(e);
        }
      } else a.name > b.name ? 1 : -1;
  }
}

function getIngredients(dishArr){
  const result={}; // object used as mapping
  dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
    if(!result[i.id])
        result[i.id]={...i};
    else
      {/*TODO: add i.amount to the amount of result[i.id]*/
        result[i.id].amount += i.amount;
      }
  }));
 return Object.values(result);
}



function SummaryView(props) {
  return (
    <div class="summary-container">
      <h3>Dinner for {props.persons} guests</h3>
      <table class="table table-hover">
        <tbody>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Aisle</th>
            <th scope="col">Quantity</th>
          </tr>
        </tbody>
        <tbody>
          {getIngredients([...props.menu]).sort(compareIngredients).map( value => 
              <tr key = {value.id}>
                <td>{value.name}</td>
                <td>{value.aisle}</td>
                <td>{(value.amount*props.persons).toFixed(2)}</td>
              </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}