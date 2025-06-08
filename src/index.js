// index.js
    
// Callbacks
const handleClick = (ramen) => {
  // Add code
  const detail=document.getElementById("ramen-detail");
  detail.getElementsByClassName("detail-image")[0].src=ramen.image;
  detail.getElementsByClassName("name")[0].textContent=ramen.name;
  detail.getElementsByClassName("restaurant")[0].textContent=ramen.restaurant;
  document.querySelector("p #rating-display").textContent=ramen.rating;
  document.getElementById("comment-display").textContent=ramen.comment;
  
  
};

const addSubmitListener = () => {
  // Add code
    const newRamen=document.getElementById("new-ramen");
    newRamen.addEventListener("submit", function(event){
    event.preventDefault();
    const ramen = {
    "name": newRamen.elements["name"].value,
    "restaurant": newRamen.elements["restaurant"].value,
    "image": newRamen.elements["image"].value,
    "rating": newRamen.elements["rating"].value,
    "comment": newRamen.elements["new-comment"].value};
    fetch("http://localhost:3000/ramens", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(ramen)
        })
        .then(response => response.json()) 
        .then(data => {
            // Refresh the ramen list to include the new ramen
            displayRamens();
        });
  
  });
};

    
const displayRamens = () => {
  // Add code
  const menu=document.getElementById("ramen-menu");
  fetch("http://localhost:3000/ramens")
  .then(res => res.json())
  .then(data => {
    menu.innerHTML = "";
    data.forEach((ramen) => {
      const img=document.createElement("img");
      img.className="image-ramen";
      img.src=ramen.image;
      img.alt=ramen.name;
      img.addEventListener("click", () => handleClick(ramen));
      menu.appendChild(img);
    });
    });
    
          
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}




document.addEventListener("DOMContentLoaded", main);
// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};


