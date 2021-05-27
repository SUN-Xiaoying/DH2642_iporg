const DetailsPresenter={
    props:["model", "searchNav"],
    data() {
        return {
          promise:
            this.model.currentDish && DishSource.getDishDetails(this.model.currentDish),
          data: null,
          error: null,
        };
      },
      created() {
        this.promise.then((result) => (this.data = result)).catch((error) => (this.error = error));
      },
      watch: {
        "model.currentDish": function () {
          this.promise = DishSource.getDishDetails(this.model.currentDish);
          this.data = null;
          this.error = null;
          this.promise
            .then((result) => (this.data = result))
            .catch((error) => (this.error = error));
        },
      },
      render(){
        console.log("Render Details");
        return (
          <div>
            {promiseNoData(this.promise, this.data, this.error) || (
                <DetailsView 
                  people={this.model.numberOfGuests}
                  dish={this.data} 
                  isDishInMenu={this.model.dinnerMenu.some(k => k.id === data.id)}
                  dishAdded={() =>{
                      this.model.addToMenu(data);
                  }}
                  cancel={() => {
                      this.model.removeFromMenu(data);
                  }}
                  searchNav={this.searchNav}
                />
            )}
          </div>

        )}


}