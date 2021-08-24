class Media {
constructor (title){
this._title = title;
this._isCheckOut = false;
this._ratings = [];
}

get title(){
  return this._title;
}
get book(){
  return this._book;
}
get rating(){
  return this._rating;
}
set isCheckedOut (value){
 this._isCheckedOut = value;
}
toggleCheckOutStatus (){
  this.isCheckedOut = !this.isCheckedOut;
}
getAverageRating (){
  let ratingSum = this.ratings.reduce((accumulator,ratings) =>{
    accumulator + ratings;
  });
  return ratingSum/this.ratings.legth;
 }
addRating(value){
  this.ratings.push(value);
 }
}

class Book extends Media {

  constructor (author, title, pages){
    super(title)
  }
}
