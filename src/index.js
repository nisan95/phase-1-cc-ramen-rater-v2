// index.js
document.addEventListener("DOMContentLoaded", () =>{
const menu=document.getElementById("ramen-menu");
const detail=document.getElementById("ramen-detail");
const newRamen=document.getElementById("new-ramen");
let ramensData=[];

fetch("http://localhost:3000/ramens")
  .then(res => res.json())
  .then(data => {
    ramensData=data;
    });
    
// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenTrouver=ramensData.find(element => element.name === ramen);
  detail.getElementsByClassName("detail-image")[0].src=ramenTrouver.image;
  detail.getElementsByClassName("name")[0].textContent=ramenTrouver.name;
  detail.getElementsByClassName("restaurant")[0].textContent=ramenTrouver.restaurant;
  document.querySelector("p #rating-display").textContent=ramenTrouver.rating;
  document.getElementById("comment-display").textContent=ramenTrouver.comment;
  
  
};

const addSubmitListener = () => {
  // Add code
  newRamen.addEventListener("submit", function(event){
    event.preventDefault();
    
    const ramen = {
    "name": newRamen.elements["name"].value,
    "restaurant": newRamen.elements["restaurant"].value,
    "image": newRamen.elements["image"].value,
    "rating": newRamen.elements["rating"].value,
    "comment": newRamen.elements["new-comment"].value};
    ramensData.push(ramen);
    const img=document.createElement("img");
      img.className="image-ramen";
      img.src=ramen.image;
      img.alt=ramen.name;
      menu.appendChild(img)

  
  });
};

    
const displayRamens = () => {
  // Add code
    menu.innerHTML = "";
    ramensData.forEach((ramen) => {
      const img=document.createElement("img");
      img.className="image-ramen";
      img.src=ramen.image;
      img.alt=ramen.name;
      menu.appendChild(img);
    });
          
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

menu.addEventListener("click", (event) => {
  handleClick(event.target.alt);
  
});

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
});

