function persistModel(model){
    let loadingFromFirebase = false;
    model.addObserver(function(){
        if (loadingFromFirebase==true){
        return ;
        }else {
        firebase.database().ref("model/dinnerModel").set({  
        guests: model.numberOfGuests,
        dinnerMenu: model.dinnerMenu,
        currentDish: model.currentDish
    }); }})

  firebase.database().ref("model/dinnerModel/guests").on("value", function(data){  // object literal
    loadingFromFirebase = true;
    if(data.val()) {
      model.setNumberOfGuests(data.val());
    }
    loadingFromFirebase = false;
  })

  firebase.database().ref("model/dinnerModel/dinnerMenu").on("value", function(data){  // object literal
    loadingFromFirebase = true;
    if(data.val()) {
      model.setDinnerMenu(data.val());
    }
    loadingFromFirebase = false;
  })

  firebase.database().ref("model/dinnerModel/currentDish").on("value", function(data){  // object literal
    loadingFromFirebase = true;
    if(data.val()) {
      model.setCurrentDish(data.val());
    }
    loadingFromFirebase = false;
  })
  
}