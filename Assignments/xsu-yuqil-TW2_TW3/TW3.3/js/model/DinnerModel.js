class DinnerModel{
    constructor(num=2){
        this.observers =[];
        this.setNumberOfGuests(num);
        this.dinnerMenu = [];
        this.currentDish = null;
        this.totalPrice = this.getMenuPrice();
    }
    //TW3.1
    addObserver(callback) {
        this.observers= this.observers.concat(this.callback=callback);
        //Terminate the lifecycle, so our APP won't be dragged down 
        return ()=>this.removeObserver(callback);
    }

    removeObserver(callback) {
        console.log("Remove observer");
        this.observers= this.observers.filter(cb => cb != callback);
    }

    notifyObservers() {
        this.observers.forEach(callback=> {
            try {
                callback();
                } catch (error) {
                console.log(error, "\n callback: " + callback);
                }
        });
    }
    
    setDinnerMenu(dishes){
        this.dinnerMenu = [...dishes];
        this.notifyObservers();
    }

    setNumberOfGuests(num){
        try{
            if(num<=0){
                throw 'Invalid number!'
            }else if(num>5){
                throw 'Not Covid-friendly!'
            } else if(!Number.isInteger(num)){
                throw 'Half a people?'
            }else{
                this.numberOfGuests = num;
                this.notifyObservers();
            }
                
        }catch(e){
            alert(e)
            console.error(e);
        }
    }

    getNumberOfGuests(){
        return this.numberOfGuests;
    }

    //TW3.3
    getMenuPrice() {
        let total=0;
        this.dinnerMenu.map(dish => {
            total = Number(dish.pricePerServing) * Number(this.getNumberOfGuests());
        });
        return total;
      }

    //TW2.3
    addToMenu(dish) {
        this.dinnerMenu.find(k => {
            if(k.id === dish.id)
                throw "Dish is already in menu."
        });
        console.log("Add " + dish.id);
        this.dinnerMenu = [dish, ...this.dinnerMenu];
        this.notifyObservers();
    }

    removeFromMenu(dish) {
        this.dinnerMenu.find(k => {
            if(k.id === dish.id){
                console.log("Remove " + dish.id);
                this.dinnerMenu = this.dinnerMenu.filter(obj=> obj.id != dish.id);
                this.notifyObservers();
            }
        });
        
    }

    setCurrentDish(id){
        console.log("Select " + id );
        this.currentDish = id;
         // notifies all observers that a change has happened
         this.notifyObservers();
    }
}