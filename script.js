function showText() {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block";
    } else {
      hiddenText.style.display = "none";
    }
  }

function showWorks() {
    var hiddenWorks = document.getElementById("hiddenWorks");
    if (hiddenWorks.style.display === "none") {
      hiddenWorks.style.display = "block";
    } else {
      hiddenWorks.style.display = "none";
    }
  }

  function hideClaim() {
    var Claim = document.getElementById("claim1")

  if (claim1.style.display === "block") {
      claim1.style.display = "none";
    } else {
      claim1.style.display = "block";
    }
    
   }

   function hideClaim2() {
    var Claim = document.getElementById("claim1")

  if (hiddenText.style.display === "block") {
      hiddenText.style.display = "none";
    } else {
        hiddenText.style.display = "none";
      }
    
   }

   function hideStar() {
    var star = document.getElementById("star")
    
    if (star.style.display === "inline") {
        star.style.display = "none";
      } else {
        star.style.display = "inline";
      }

    }

    document.addEventListener("DOMContentLoaded", function() {
        const sv1Link = document.getElementById("sv1-link");
        const sv1Content = document.getElementById("sv1-content");

        const dsfLink = document.getElementById("dsf-link");
        const dsfContent = document.getElementById("dsf-content");
    
        sv1Link.addEventListener("click", function(event) {
            event.preventDefault();
            sv1Content.style.display = "block";
            dsfContent.style.display = "none"
        });
        dsfLink.addEventListener("click", function(event) {
            event.preventDefault();
            dsfContent.style.display = "block";
            sv1Content.style.display = "none"
        });
    });


  function toggleDarkMode() {
      var body = document.body;
      var half3 = document.half3
      body.classList.toggle("dark-mode");
  }
  
  // Aggiungi un event listener al pulsante per gestire il clic
  var darkModeToggle = document.getElementById("darkMode-toggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);
   


