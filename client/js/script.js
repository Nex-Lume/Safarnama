

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
///////////////////////////////////////////////
// List of example places with associated images and links
// List of example places with associated images and links
const places = [
  { name: "Goa-Beach Escape...", img: "https://www.agoda.com/wp-content/uploads/2024/07/Goa-India-1244x700.jpg", link: "Goa.html" },
  { name: "Andhra Pradesh-Coastal Retreat...", img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/02/Rushikonda-Beach-Andhra-Pradesh.jpg?resize=1024%2C768&ssl=1", link: "/south/AndhraPradesh.html" },
  { name: "Arunachal Pradesh-Himalayan Beauty...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2mLfCQOB87Qrln3vHLLX1841GKPhhOv__w&s", link: "/west/ArunachalPradesh.html" },
  { name: "Assam-Tea Garden Serenity...", img: "https://images.cnbctv18.com/wp-content/uploads/2022/09/Assam.jpg?impolicy=website&width=1200&height=900", link: "/west/Assam.html" },
  // { name: "Bihar-Spiritual Journey...", img: "Images/Bihar/bihar1.jpg", link: "/west/Bihar.html" },
  // { name: "Chhattisgarh-Tribal Exploration...", img: "Images/Chhattisgarh/chhattisgarh1.jpg", link: "/north/Chhattisgarh.html" },
  { name: "Gujarat-Cultural Heritage...", img: "https://www.capertravelindia.com/images/gujrat-2.jpg", link: "/east/Gujarat.html" },
  // { name: "Haryana-Rural Getaway...", img: "Images/Haryana/haryana1.jpg", link: "Haryana.html" },
  { name: "Himachal Pradesh-Mountain Adventure...", img: "https://himachaltourism.gov.in/wp-content/uploads/2018/01/Trekkers-in-Spiti-valley-min.jpg", link: "/north/Himachal.html" },
  { name: "Jammu & Kashmir-Majestic Valleys...", img: "https://www.ttrikon.com/system/images/000/758/716/952469555829d194ea13afe7dfbdadf6/x600gt/Untitled_design__3_.jpg?1718844717", link: "/north/Kashmir.html" },
  // { name: "Jharkhand-Nature’s Bounty...", img: "Images/Jharkhand/jharkhand1.jpg", link: "Jharkhand.html" },
  { name: "Karnataka-Heritage Trails...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq7nFVyWYykptL2QTHw7B90uC1dLjCJGnqw&s", link: "/south/Karnataka.html" },
  { name: "Kerala-Nature’s Oasis...", img: "https://www.india.com/wp-content/uploads/2024/09/rivers.jpg", link: "/south/Kerala.html" },
  { name: "Madhya Pradesh-Heritage Wonders...", img: "https://static.toiimg.com/photo/msid-106486632,width-96,height-65.cms", link: "/north/MadhyaPradesh.html" },
  { name: "Maharashtra-City & Hills Escape...", img: "https://static.toiimg.com/photo/msid-114685246,width-96,height-65.cms", link: "/east/Maharashtra.html" },
  // { name: "Manipur-Scenic Lakes...", img: "Images/Manipur/manipur1.jpg", link: "Manipur.html" },
  // { name: "Meghalaya-Monsoon Magic...", img: "Images/Meghalaya/meghalaya1.jpg", link: "Meghalaya.html" },
  // { name: "Mizoram-Serene Hills...", img: "Images/Mizoram/mizoram1.jpg", link: "Mizoram.html" },
  // { name: "Nagaland-Tribal Culture...", img: "Images/Nagaland/nagaland1.jpg", link: "Nagaland.html" },
  { name: "Odisha-Temples & Beaches...", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/81/6c/7d.jpg", link: "/west/Odisha.html" },
  { name: "Punjab-Golden Fields...", img: "https://blog.redbus.in/wp-content/uploads/2021/11/shutterstock_1032227752.jpg", link: "/north/Amritsar.html" },
  { name: "Rajasthan-Desert Adventure...", img: "https://www.rajasthanbhumitours.com/blog/wp-content/uploads/2024/07/Thrilling-Safaris-and-Camel-Rides-in-rajasthan.jpg", link: "/north/Jaipur.html" },
  { name: "Sikkim-Himalayan Escape...", img: "https://thebeyondtrips.com/wp-content/uploads/2024/02/9d3186ae-a0b9-47e1-9841-c13cebb76642-e1708784364569.jpg", link: "/west/Sikkim.html" },
  { name: "Tamil Nadu-Temple Tour...", img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/6993d173d4b49caed93819ef9e4a366631c6b249/big-b71140ad5f5648cff4aaff46447c003f.jpg", link: "/south/TamilNadu.html" },
  // { name: "Telangana-Urban Heritage...", img: "Images/Telangana/telangana1.jpg", link: "Telangana.html" },
  { name: "Tripura-Unexplored Beauty...", img: "https://etimg.etb2bimg.com/photo/96665836.cms", link: "/south/Kerala.html" },
  { name: "Uttar Pradesh-Spiritual Awakening...", img: "https://m.economictimes.com/thumb/msid-103651214,width-1200,height-900,resizemode-4,imgsize-122332/kashi-vishwanath-temple.jpg", link: "/north/UttarPradesh.html" },
  { name: "Uttarakhand-Mountain Retreat...", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/547174151.jpg?k=1d1777c8441cb0944efd56becf9983cff5865865e4d9859cb5143d11b47ec742&o=&hp=1", link: "/north/Uttarakhand.html" },
  { name: "West Bengal-Cultural Delight...", img: "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip.s3.amazonaws.com%2Fuploads%2Fblog%2Fimages%2Fcover%2FWhatsApp-Image-2023-10-06-at-11.45.06-AM-min.webp&w=3840&q=50", link: "/west/WestBengal.html" },
  // { name: "Delhi-Heritage and Modern...", img: "Images/Delhi/delhi1.jpg", link: "/north/Delhi.html" },
  // { name: "Lakshadweep-Tropical Escape...", img: "Images/Lakshadweep/lakshadweep1.jpg", link: "Lakshadweep.html" },
  // { name: "Puducherry-Coastal Calm...", img: "Images/Puducherry/puducherry1.jpg", link: "Puducherry.html" },
    { name: "Agra-Historic Beauty...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiZpop5Ns9zQdhJ_JGey_Hpz_IlwVZYoUhA&s", link: "/north/Agra.html" },
    { name: "Delhi-Heritage and Modern...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWV99Mmll3tp_znEH03izubZEOW2LL8XgnJQ&s", link: "/north/Delhi.html" },
    { name: "Himalayan Trek-Mountain Adventure...", img: "https://getupandgo.in/wp-content/uploads/2015/11/himalayan-trekking.jpg", link: "/north/HimalayanTrek.html" },
    { name: "Leh Ladakh-Deserted Peaks...", img: "https://travelxploria.com/wp-content/uploads/2021/12/281952D1-4303-45AB-873C-D5F315883540.jpeg", link: "/north/Ladakh.html" },
    { name: "Darjeeling-Hill Station Bliss...", img: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-Things-to-do-in-Darjeeling_14th-jan.jpg", link: "/west/Darjeeling.html" },
    { name: "Lonavala-Hill Escape...", img: "https://tripxl.com/blog/wp-content/uploads/2024/10/Top-10-Trails-For-Lonavala-Trekking-840x425.jpg", link: "/east/Lonavala.html" },
    { name: "Mumbai-City of Dreams...", img: "https://theenterpriseworld.com/wp-content/uploads/2022/11/mumbai-upshot.jpg", link: "/east/Mumbai.html" }
  
];


// Add event listener to the search input for displaying search results
document.getElementById("search-input").addEventListener("input", function () {
  const searchInput = this.value.toLowerCase();
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchInput)
  );
  showSearchResults(filteredPlaces);
});

// Optional: Add 'Enter' key functionality
document.getElementById("search-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const searchInput = this.value.toLowerCase();
    const filteredPlaces = places.filter(place =>
      place.name.toLowerCase().includes(searchInput)
    );
    showSearchResults(filteredPlaces);
  }
});

// Show search results in the dropdown
function showSearchResults(results) {
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = ''; // Clear previous results

  if (results.length > 0) {
    results.forEach(place => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");

      // Create an image element
      const placeImage = document.createElement("img");
      placeImage.src = place.img;
      placeImage.alt = place.name;
      placeImage.classList.add("place-image");

      // Create text element for place name
      const placeText = document.createElement("span");
      placeText.textContent = place.name;

      // Append image and text to the result item
      resultItem.appendChild(placeImage);
      resultItem.appendChild(placeText);

      // Add click event to redirect to the place's page
      resultItem.addEventListener("click", () => {
        window.location.href = place.link;
      });

      resultsContainer.appendChild(resultItem);
    });

    resultsContainer.style.display = 'block'; // Show the results container
  } else {
    resultsContainer.innerHTML = "<div class='result-item'>No matching places found.</div>";
    resultsContainer.style.display = 'block'; // Show the "no results" message
  }
}

// Close the search results when clicking outside of the search container
document.addEventListener("click", function (event) {
  const searchContainer = document.querySelector('.search-container');
  const resultsContainer = document.getElementById("search-results");

  // Check if the clicked area is outside the search box and results
  if (!searchContainer.contains(event.target)) {
    resultsContainer.style.display = 'none'; // Hide the results container
  }
});

// Prevent the search container from closing when clicked inside
document.querySelector('.search-container').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the event from propagating to the document
});


//

var swiper = new Swiper(".home-slider", {
  loop: true, // Enable infinite loop
  autoplay: {
    delay: 5000, // Time in milliseconds between slides (5 seconds)
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
 
});


document.addEventListener("DOMContentLoaded", function () {
  const consentBanner = document.getElementById("cookieConsent");

  if (!localStorage.getItem("cookieAccepted")) {
    consentBanner.style.display = "block";
  }

  document.getElementById("acceptCookies").addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    consentBanner.style.display = "none";
  });
});

function sendToWhatsApp(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  // Construct the WhatsApp message
  const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  // WhatsApp URL with the message
  const whatsappURL = `https://wa.me/919834248447?text=${whatsappMessage}`;

  // Redirect to WhatsApp
  window.location.href = whatsappURL;
}