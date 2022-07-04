let div = document.getElementById("x");

let images = [
'img/foto/08.jpg',
'img/foto/357.jpg',
'img/foto/603.jpg',
'img/foto/f1.jpg',
'img/foto/f2.jpg',
'img/foto/f3.jpg',
'img/foto/f4.jpg',
'img/foto/sa.jpg'
];

for (let i = 0; i < images.length; i++) {
  
  let img = document.createElement("img"); 
img.src= images[i];
  div.appendChild(img); 
} 

 






