console.log("hello welcome");


// menu bar (hemburger icon for mobile screen)
const menuBar = document.querySelector("#menu-bar");



// navigation bar dilog for mobile
const navDilog = document.querySelector("#nav-dilog");


// close menu icon 
const closeMenuButton = document.querySelector("#close-menu-button");

// all faqs items
const  faqsItem = document.querySelectorAll(".faqs-item");


// default navigation bar
const defaultHeader = document.querySelector("#fixed-header");

let inititaltranslateLeftToRight = -700
let inititaltranslateRightToLeft = 0

menuBar.addEventListener("click", () => {
  navDilog.classList.toggle("hidden");
});

closeMenuButton.addEventListener("click", () => {
  navDilog.classList.toggle("hidden");
});



// intersection observer function
// this function will run when the element is in the view port
// 
const setupintersectinObserver = (element, leftTORight, speed) => {
  const observer = new IntersectionObserver((entries) => {
    const isIntercepting = entries[0].isIntersecting;
    if (isIntercepting) {
      document.addEventListener("scroll", scrollHandler);
    }
    else{
      document.removeEventListener("scroll", scrollHandler);
    }
  });

  observer.observe(element);

  // scroll handler function to update the translate value of the element
  const scrollHandler = () => {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if(leftTORight){
      totalTranslate = inititaltranslateLeftToRight + translateX
    }else{
      totalTranslate = inititaltranslateRightToLeft - translateX
    }
    element.style.transform = `translateX(${totalTranslate}px)`;  
  };
};

// fetch all the lines 
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
const line4 = document.querySelector("#line4")


// calling the intersection observer
setupintersectinObserver(line1, true, 0.2);
setupintersectinObserver(line2, false, 0.5);
setupintersectinObserver(line3, true, 0.7);
setupintersectinObserver(line4, false, 0.7);





// expand and collapse the faqs items 

faqsItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    const i = event.currentTarget.querySelector("i")
    i.classList.toggle("-rotate-180")
    event.currentTarget.nextElementSibling.classList.toggle("hidden")
  })
}
)




// function toggleFaq(element) {
//   const faqContent = element.nextElementSibling; // Get the <p> tag
//   const icon = element.querySelector('i'); // Get the icon
  
//   // Toggle max-height and opacity
//   if (faqContent.classList.contains('max-h-0')) {
//     faqContent.classList.remove('max-h-0');
//     faqContent.classList.add('mt-2');
//     faqContent.classList.add('max-h-[200px]'); // Set max-height to enough space
//     icon.classList.add('rotate-180'); // Rotate icon
//   } else {
//     faqContent.classList.add('max-h-0');
//     faqContent.classList.remove('max-h-[200px]');
//     icon.classList.remove('rotate-180'); // Reset icon rotation
//     faqContent.classList.remove('mt-2')
//   }
// }





// // this is the custom scroll event
// const awesomeNavbar = document.querySelector("#awesome-navbar");

// document.addEventListener("scroll", () => {
 
//   const scrollY = window.scrollY;
 
//   if (scrollY > 400) {
//     awesomeNavbar.classList.remove("hidden");
//     awesomeNavbar.classList.add("flex");
//     console.log("scrooled 400")
//     defaultHeader.classList.add("hidden");
//   }
//   else {
//     awesomeNavbar.classList.remove("flex");
//     awesomeNavbar.classList.add("hidden");
//     console.log("not scrooled 400")
//     defaultHeader.classList.remove("hidden");
//   }
// });