document.addEventListener("DOMContentLoaded", function () {
    var clicked = true;
    var ref = document.getElementById("btn");
    const menu = document.getElementById('menu');
  
    ref.addEventListener("click", function () {
      if (clicked) {     
        menu.style.display = 'flex';        
        menu.style.animation = 'fadeFromRight 0.4s ease-in-out';  
        ref.innerHTML = ' <i class="fas fa-times"></i>';        
        clicked = false;
      } else  {     
        menu.style.animationName = 'fadeToRight 0.4s ease-in-out';       
        ref.innerHTML = '<i class="fas fa-bars"></i>';
        clicked = true;
      }
    });
  });
 
 