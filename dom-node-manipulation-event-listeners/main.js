let testing = () => {
    event.preventDefault();                                                     // Prevent refresh
    text = document.querySelector("input[type=text]");                          // Assign value in text box to the variable text
    newLi = document.createElement("li")                                        // Creates a new li
    newLi.innerHTML = (text.value);                                             // Changes the innerHTML to 
    document.querySelector("ul").appendChild(newLi);
    text.value = '';
}

document.querySelector("input[type=submit]").addEventListener("click", testing);

