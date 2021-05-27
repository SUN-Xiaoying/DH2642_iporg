class DinnerModel {
  constructor(guests=2) {
    this.setNumberOfGuests(guests);
  }
  
  setNumberOfGuests(x) {
    try{
      if(x<=0){
        throw 'Invalid number!'
      }else if(x>5){
        throw 'Not Covid-friendly!'
      } else if(!Number.isInteger(x)){
        throw 'Half a people?'
      }else{
        this.numberOfGuests = x;
      }
    }catch(e){
      alert(e)
      console.error(e);
    }
  }
}