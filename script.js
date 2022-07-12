
  function doCapture() {
   window.scrollTo(0, 0);

   //Convert the div to image (canvas)
   html2canvas(document.getElementById("quote-image")).then(function (canvas) {

       //Get the image data as JPEG and 0.9 quality (0.0 - 1.0)
       var myImage = canvas.toDataURL("image/jpeg", 0.9);
       console.log(myImage)
       downloadURI(myImage, "MaSimulation.png");
   })};
   

   function downloadURI(uri, name) {
       var link = document.createElement("a");
       link.download = name;
       link.href = uri;
       document.body.appendChild(link);
       link.click();   
       //after creating link you should delete dynamic link
       //clearDynamicLink(link); 
   }

// Quote

function changeQuote() {
  let page = Math.ceil(Math.random() * 7268)
  let randomNumber = Math.ceil(Math.random() * 10)

  let quoteText = document.querySelector(".quote");
  let quoteAuthor = document.querySelector(".quote-author");

  fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
    .then(response => response.json())
    .then(data => {

      let quote = data.data[randomNumber].quoteText;
      let author = data.data[randomNumber].quoteAuthor;

      quoteText.innerHTML = quote;
      quoteAuthor.innerHTML = author;

      // adjusting font size
      let length = quoteText.innerHTML.length;

      if (length > 100) {
        quoteText.style.fontSize = "35px";
      } else if (length > 80) {
        quoteText.style.fontSize = "56px";
      } else {
        quoteText.style.fontSize = "64px";
      }
    });
};

// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Random background functionality

let allBackgroundImages = ["bg-images/image1.jpg", "bg-images/image2.jpg", "bg-images/image3.jpg", "bg-images/image4.jpg", "bg-images/image5.jpg", "bg-images/image6.jpg", "bg-images/image7.jpg", "bg-images/image8.jpg", "bg-images/image9.jpg", "bg-images/image10.jpg"];

let j = 1;

function changeBg() {

  let bgContainer = document.querySelector(".quote-image");
  bgContainer.style = `
  background-image: url("bg-images/image${j}.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;`
    
  if(j === allBackgroundImages.length){
      j = 0;
    } else {
      j++;
    }
}


// Font color functionality
const whiteFontButton = document.querySelector(".font-1");

whiteFontButton.addEventListener('click', ()=>{
  let quoteText = document.querySelector(".quote-text");
  quoteText.style.color = "white";
})

const yellowFontButton = document.querySelector(".font-2");
yellowFontButton.addEventListener('click', ()=>{
  let quoteText = document.querySelector(".quote-text");
  quoteText.style.color = "#f3d25a";
})

const pinkFontButton = document.querySelector(".font-3");
pinkFontButton.addEventListener('click', ()=>{
  let quoteText = document.querySelector(".quote-text");
  quoteText.style.color = "#e1c4cb";
})

const blueFontButton = document.querySelector(".font-4");
  blueFontButton.addEventListener('click', ()=>{
  let quoteText = document.querySelector(".quote-text");
  quoteText.style.color = "#1c2078";
})

// Background color functionality

const purpleBackgroundButton = document.querySelector(".bg-1");
  purpleBackgroundButton.addEventListener('click', ()=>{
  let quoteBackground= document.querySelector(".quote-image");
  quoteBackground.style.background = "#6869ac";
})

const greenBackgroundButton = document.querySelector(".bg-2");
  greenBackgroundButton.addEventListener('click', ()=>{
  let quoteBackground= document.querySelector(".quote-image");
  quoteBackground.style.background = "#85a195";
})

const orangeBackgroundButton = document.querySelector(".bg-3");
  orangeBackgroundButton.addEventListener('click', ()=>{
  let quoteBackground= document.querySelector(".quote-image");
  quoteBackground.style.background = "#d3927e";
})

const pinkBackgroundButton = document.querySelector(".bg-4");
  pinkBackgroundButton.addEventListener('click', ()=>{
  let quoteBackground= document.querySelector(".quote-image");
  quoteBackground.style.background = "#c7aaaf";
})

// Text layout functionality

const alignLeftButton = document.querySelector(".layout-left");
  alignLeftButton.addEventListener('click', ()=>{
  let quoteText= document.querySelector(".quote-text");
  quoteText.style.textAlign = "left"
})

const alignCenterButton = document.querySelector(".layout-center");
  alignCenterButton.addEventListener('click', ()=>{
  let quoteText= document.querySelector(".quote-text");
  quoteText.style.textAlign = "center"
})

const alignRightButton = document.querySelector(".layout-right");
  alignRightButton.addEventListener('click', ()=>{
  let quoteText= document.querySelector(".quote-text");
  quoteText.style.textAlign = "right"
})

// format functionality

const verticalButton = document.querySelector(".format-vertical");
  verticalButton.addEventListener('click', ()=>{
  let quoteFormat = document.querySelector(".quote-image");
  let container = document.querySelector(".quote-container");
  let textQuote = document.querySelector(".quote");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  quoteFormat.style.width = "360px";
  quoteFormat.style.height = "640px";
  textQuote.style.fontSize = "48px";
})

const squareButton = document.querySelector(".format-square");
  squareButton.addEventListener('click', ()=>{
  let quoteFormat = document.querySelector(".quote-image");
  let container = document.querySelector(".quote-container");
  let textQuote = document.querySelector(".quote");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  quoteFormat.style.width = "640px";
  quoteFormat.style.height = "640px";
  textQuote.style.fontSize = "54px";
})

const horizontalButton = document.querySelector(".format-horizontal");
  horizontalButton.addEventListener('click', ()=>{
  let quoteFormat = document.querySelector(".quote-image");
  let container = document.querySelector(".quote-container");
  let textQuote = document.querySelector(".quote");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  quoteFormat.style.width = "100%";
  quoteFormat.style.height = "520px";
})

// font family functionality

function fontSelect(font){
  document.getElementById("quote_text").style.fontFamily = font.value;
  document.getElementById("quote_author").style.fontFamily = font.value;
}




