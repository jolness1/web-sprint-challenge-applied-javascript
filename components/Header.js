// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


const headGroup = document.querySelector('.header-container')
function Header() {
    //creating elements/classes
    const header = document.createElement('div');
    header.classList.add("header");
    const date = document.createElement('span');
    date.classList.add("date");
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    date.classList.add("temp");
    
    //Hiearchy 
    headGroup.appendChild(header);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    
    // content 
    date.textContent = `MARCH 28, 2020`;
    title.textContent = `Lambda Times`;
    temp.textContent = `98°`;

    
    return header;
    
}


