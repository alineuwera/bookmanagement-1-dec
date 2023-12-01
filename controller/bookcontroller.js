const {booksDatabase} = require('../db/booksdatabase');

//add
const add = (newbooks) => {
  newbooks.id = booksDatabase.length + 1;
  booksDatabase.push(newbooks);
  console.log('\nAfter Added New books');
  console.log(booksDatabase); 
}

//display

const display = () => {
  console.log(booksDatabase);
}

//Update    

const update =(id,key,value) => {
    var exists = booksDatabase.find(Element=>Element.id === id);
    console.log(exists);
    if(!exists) {
        console.log('\nBook not found');
}else {
    if(key === 'title' || key === 'author' || key === 'year') {
        console.log('\n Before Updated book');
        exists[key] = value;
        console.log('\nUpdated book');
        console.log(exists);
}
}
}

//Update many books in a database

const updateMany = (id,obj) => {
    var exists = booksDatabase.find(Element=>Element.id === id);
    console.log(exists);
    if(!exists) {
        console.log('\nBook not found');
}else {
    for (const key in obj) {
            exists[key] = obj[key];
        }
            console.log('\nUpdated many book');
            console.log(exists);
            
        
    }
}

//remove books from a database

const remove = (id) => {
    var exists = booksDatabase.find(Element=>Element.id === id);
    console.log(exists);
    if(!exists) {
        console.log('\nBook not found');
}else {
    var n = booksDatabase.indexOf(exists);
    booksDatabase.splice(n,1);
    console.log('\nRemoved book');
    console.log(exists);
}
}


module.exports = {
  booksDatabase,
  add,
  display,
  update,
  updateMany,
  remove
};