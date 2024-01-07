function displayList() {
 const listContainer = document.getElementById('list-container');
 
 // Replace this array with your list of things
 const things = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'thing 5','thing 6'];
 
 // Clear the existing list
 listContainer.innerHTML = '';

 // Display the list of things
 things.forEach(thing => {
     const li = document.createElement('li');
     li.textContent = thing;
     listContainer.appendChild(li);
 });
}

function displayList2() {
    const listContainer = document.getElementById('list-container2');
    const things2 = ['you tube','facebok','telegram','instagram']
    listContainer.innerHTML = '';

    things2.forEach(thing2 => {
        const li = document.createElement('li');
        li.textContent = thing2;
        listContainer.appendChild(li);
    });
}