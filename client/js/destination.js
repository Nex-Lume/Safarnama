document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".custom-video-slide");
  const totalSlides = slides.length;
  let currentSlide = 0;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "block" : "none";
    });
  }

  function moveSlide(direction) {
    if (direction === "prev") {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    } else if (direction === "next") {
      currentSlide = (currentSlide + 1) % totalSlides;
    }
    updateSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  // Initialize slider
  updateSlider();

  // Expose functions globally for button onclick events
  window.moveSlide = moveSlide;
  window.goToSlide = goToSlide;
});



const regionData = {
  north: [
    { name: "Uttarakhand", img: "images/Himachal/manali6.jpg", link: "UttaraKhand.html" },
    { name: "Himachal", img: "images/Himachal/manali9.jpg", link: "Himachal.html" },
    { name: "Ladkh", img: "images/Ladakh/ladakh3.jpg", link: "Ladakh.html" },
    { name: "Uttar Pradesh", img: "images/UP/varanasi5.jpg", link: "varanasi.html" },
    { name: "Jammu & Kashmir", img: "images/Kashmir/gulmarg3.jpg", link: "Kashmir.html" },
   
  ],
  south: [
    { name: "Kerala", img: "images/Kerala/kerla1.jpg", link: "Kerala.html" },
    { name: "karnataka", img: "images/Karnataka/karanataka (1).jpg", link: "karnataka.html" },//img
    { name: "Tamil Nadu", img: "images/Tamilnadu/tn1.jpg", link: "Tamilnadu.html" },//img
    { name: "Kanniyakumari", img: "images/Tamilnadu/Kanyakumari (1).jpg", link: "Kanniyakumari" },//img,html
    { name: "Andhra Pradesh", img: "images/AP/ap (3).jpg", link: "AndhraPradesh.html" },
   
  ],
  central: [
    { name: "Ujjain", img: "images/MP/ujjain.jpg", link: "Ujjain.html" },
    { name: "Bhopal", img: "images/MP/bhopal.jpg", link: "MadhyaPradesh.html" },
    { name: "Chattisgarh", img: "images/Chattisgarh/chattis.jpg", link: "Chattisgarh.html" },
    { name: "Khajuraho", img: "images/Karnataka/khajuraho1.jpg", link: "#indore" },//img,html
    { name: "Madhya Pradesh", img: "images/MP/mp1.jpg", link: "MadhyaPradesh.html" },
   
  ],
  west: [
    { name: "Rajasthan", img: "images/Rajasthan/rajasthan.jpg", link: "Rajasthan.html" },
    { name: "Goa", img: "images/Goa/goa4.jpg", link: "Goa.html" },
    { name: "Maharashtra", img: "images/Maharashtra/lonavala1.jpg", link: "Maharashtra.html" },
    { name: "Mumbai", img: "images/Maharashtra/mumbai1.jpg", link: "Mumbai.html" },
    { name: "Gujarat", img: "Images/Gujarat/Vadodara  (8).jpg", link: "Gujarat.html" },//img
  ],
  east: [
    { name: "West Bengal", img: "images/Westbengal/wb (5).jpg", link: "WestBengal.html" },//img
    { name: "Sikkim", img: "images/Sikkim/sikkim.jpg", link: "Sikkim.html" },//img
    { name: "Arunachal", img: "images/Arunachal/ap.jpg", link: "Arunachal.html" },//img
    { name: "Odisha", img: "images/Odisha/odisha1.jpg", link: "Odisha.html" },
    { name: "Assam", img: "images/Assam/Assam.jpg", link: "Assam.html" },//img
   
  ],
};

function showRegion(region) {
  const content = document.getElementById("content");
  const destinations = regionData[region];

  // Clear previous content
  content.innerHTML = `<h3>Top Destinations in ${region.charAt(0).toUpperCase() + region.slice(1)}</h3>`;
  
  // Create a collage container
  const collage = document.createElement("div");
  collage.className = "image-collage";

  // Left-side large image container
  const leftContainer = document.createElement("div");
  leftContainer.className = "left-image";

  // Use the first destination for the left image
  const leftImage = destinations[0];
  leftContainer.innerHTML = `
      <a href="${leftImage.link}">
          <img src="${leftImage.img}" alt="${leftImage.name}">
          <p class="caption">${leftImage.name}</p>
      </a>
  `;
  collage.appendChild(leftContainer);

  // Right-side grid container
  const rightContainer = document.createElement("div");
  rightContainer.className = "right-grid";

  // Use the next four destinations for the grid
  const rightImages = destinations.slice(1, 5);
  rightImages.forEach(dest => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "small-image";

    imgWrapper.innerHTML = `
      <a href="${dest.link}">
          <img src="${dest.img}" alt="${dest.name}">
          <p class="caption">${dest.name}</p>
      </a>
    `;
    rightContainer.appendChild(imgWrapper);
  });

  collage.appendChild(rightContainer);
  content.appendChild(collage);
  
}
// Call the showRegion function with "north" as the default region on page load
document.addEventListener("DOMContentLoaded", () => {
  showRegion("north");
});
