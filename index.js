const {add,display,update,updateMany,remove} = require('./controller/bookcontroller');

const newbook = 
    {
        title: 'The Great Hotel',
        author: 'Aline Uwera',
        year: 2020 
       
    };
    //display all books in a dtabase
    display();

    //add a new book in a database
    add(newbook);

    //update a book in a database
    update(1,'author','T.Vincent');

    //update many books in a database
    const tobeupdated = {
        title: 'The big animals in the world',
        author: 'Kanyamanza Franco',
        year: 1925
    }
    updateMany(2,tobeupdated);

    //remove a book in a database
    remove(3);
    
