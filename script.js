

// back to top button

let backToTopButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// show more button

let readMoreButton = document.getElementById("btn-read-more");

readMoreButton.addEventListener("click", (()=>{
    document.getElementById("how-we-work").scrollIntoView();
}));

// CUSTOMER REVIEWS

let reviews = [
    ["./customerImages/1.jpg", "Phasellus ligula diam, rhoncus a tincidunt in, auctor non est. Nulla eleifend est non nibh sodales, ut hendrerit nisi egestas.", "Rock Alane", "Leader"], 
    ["./customerImages/2.jpg", "Phasellus ligula diam, rhoncus a tincidunt in, auctor non est. Nulla eleifend est non nibh sodales, ut hendrerit nisi egestas.", "Soma Sen", "Manager"],
    ["./customerImages/3.jpg", "Phasellus ligula diam, rhoncus a tincidunt in, auctor non est. Nulla eleifend est non nibh sodales, ut hendrerit nisi egestas.", "Joseph Austin", "Co-Leader"],
    ["./customerImages/4.jpg", "Phasellus ligula diam, rhoncus a tincidunt in, auctor non est. Nulla eleifend est non nibh sodales, ut hendrerit nisi egestas.", "Mona Andrew", "Entrepreneur"]
]
// 0 Slika 1 Recenzija 2 Ime i Prezime 3 Titula
let i = 0;

function nextCustomer(){
    i++;
    if(i == reviews.length){
        i = 0;
    }
    $("#customerImage").fadeOut(500);
    $("#customerReview").fadeOut(500); 
    $("#customerName").fadeOut(500); 
    $("#customerTitle").fadeOut(500);
    setTimeout(()=>{
        document.getElementById("customerImage").src = reviews[i][0];
        document.getElementById("customerReview").innerHTML = reviews[i][1];
        document.getElementById("customerName").innerHTML = reviews[i][2];
        document.getElementById("customerTitle").innerHTML = reviews[i][3];
    }, 500)
    
    $("#customerImage").fadeIn(500);
    $("#customerReview").fadeIn(500); 
    $("#customerName").fadeIn(500); 
    $("#customerTitle").fadeIn(500); 
}
function previousCustomer(){
    if(i == 0){
        i = reviews.length;
    }
    i--;

    $("#customerImage").fadeOut(500);
    $("#customerReview").fadeOut(500); 
    $("#customerName").fadeOut(500); 
    $("#customerTitle").fadeOut(500);
    setTimeout(()=>{
        document.getElementById("customerImage").src = reviews[i][0];
        document.getElementById("customerReview").innerHTML = reviews[i][1];
        document.getElementById("customerName").innerHTML = reviews[i][2];
        document.getElementById("customerTitle").innerHTML = reviews[i][3];
    }, 500)
    
    $("#customerImage").fadeIn(500);
    $("#customerReview").fadeIn(500); 
    $("#customerName").fadeIn(500); 
    $("#customerTitle").fadeIn(500); 
}



window.onload = ()=>{
    AOS.init();
    document.getElementById("customerImage").src = reviews[0][0];
    document.getElementById("customerReview").innerHTML = reviews[0][1];
    document.getElementById("customerName").innerHTML = reviews[0][2];
    document.getElementById("customerTitle").innerHTML = reviews[0][3];
    initializeCookieBanner();
    if(formSentcheck()){
      alert("Form submitted!")
    }
    console.log(formSentcheck())
    setInterval(nextCustomer, 5000)
}

document.getElementById("btn-next-customer").addEventListener("click", nextCustomer);
document.getElementById("btn-previous-customer").addEventListener("click", previousCustomer);




function formSentcheck(){
 return window.location.href.slice(-7) == "success";
}

function showCookieBanner(){
  let cookieBanner = document.getElementById("cb-cookie-banner");
  cookieBanner.style.display = "block";
 }
 
 function hideCookieBanner(){
  localStorage.setItem("cb_isCookieAccepted", "yes");
  let cookieBanner = document.getElementById("cb-cookie-banner");
  cookieBanner.style.display = "none";
 }
 
 function initializeCookieBanner(){
  let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
  if(isCookieAccepted === null)
  {
   localStorage.setItem("cb_isCookieAccepted", "no");
   showCookieBanner();
  }
  if(isCookieAccepted === "no"){
   showCookieBanner();
  }
 }
 
 // Assigning values to window object
 window.cb_hideCookieBanner = hideCookieBanner;