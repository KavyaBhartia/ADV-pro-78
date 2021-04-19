var images = [
  "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg",
 "https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg",
 "https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg",
 "https://st.depositphotos.com/1077687/1903/v/950/depositphotos_19036597-stock-illustration-cartoon-boy.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjWTTY8nNBPgi0B980hBgKCRtQqh7u69f8A&usqp=CAU",
];
var names_2 = [
"Ganga Devi Bhartia",
"Krishna Kr Bhartia",
"Priyanka Bhartia",
"Kavya Bhartia",
"Ishaan Bhartia"
];
var i = 0;
function nextslide() 
{
  document.getElementById("img1").src 
  = images[i],
    document.getElementById("names").innerHTML 
  =names_2[i],
i++
if (i==5) {
  i=0
}
}