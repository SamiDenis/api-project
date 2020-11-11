let url1 ="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
let toc = document.querySelectorAll(".toc")
 
 
 

let images = document.querySelectorAll("img")
let buttons = document.querySelectorAll("button")
let paragraphs = document.querySelectorAll("p")


// toc.style.opacity = 0;



for(let i=0; i<toc.length; i++) {
buttons[i].addEventListener("click", function (e){
  e.preventDefault();
  
    fetch(url1)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      images[i].src = data[i].image_link
      paragraphs[i].innerText = data[i].description
    })

    
toc[i].classList.toggle("hidden");
    // toc.style.opacity = 100;
    
  
  })
}
