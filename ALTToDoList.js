

window.addEventListener('load', () => {
    //JSON.parse = go into json file and get item called todos from the css file
    //then the getItem() method of the Storage interface, 
    //when passed a key name, will return that key's value, or null if the key does not exist, 
    //in the given Storage object, in this case todos
    //then assign it to todos and make it a global variable or assign an empty array
    todos = JSON.parse(localStorage.getItem('todos')) || [];


    //The Document method querySelector()
    //returns the first Element within the document that matches the specified selector, 
    //or group of selectors. 
    //If no matches are found, null is returned.
   
    //so find name
    const nameInput = document.querySelector('#name');

    //and assign it to input name
    const newTodoForm = document.querySelector('#new-todo-form');

    //and get a value called username
    const username = localStorage.getItem('username') || '';

    //assign nameinput to username
    nameInput.value = username;

    //create event for changing name, e is getting the event i think
    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })

})

//todos is now a global variable