window.addEventListener('scroll',()=>{

    let navbar = document.querySelector(".navbar");
    console.log("hello")
    
    if (window.pageYOffset >= 150) {
      navbar.classList.add("sticky")
      
    } else {
      navbar.classList.remove("sticky");
    }
  })

   //Get the button:
   mybutton = document.getElementById("myBtn");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function () { scrollFunction() };

   function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           mybutton.style.display = "block";
       } else {
           mybutton.style.display = "none";
       }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
       document.body.scrollTop = 0; // For Safari
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }


   window.onload = function() {
    document.getElementById("popup").style.display = "block";
  };
  
  document.getElementById("close-btn").onclick = function() {
    document.getElementById("popup").style.display = "none";
  };