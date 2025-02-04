document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", function () {
    const fromCity = document.getElementById("fromCity").value.trim().toLowerCase();
    const toCity = document.getElementById("toCity").value.trim().toLowerCase();
    const departureDate = document.getElementById("departureDate").value;
    const adults = parseInt(document.getElementById("adults").value, 10);
    const children = parseInt(document.getElementById("children").value, 10);
    const maxPrice = parseInt(document.getElementById("priceFilter").value, 10);

    if (!fromCity || !toCity || !departureDate || adults <= 0 || maxPrice <= 0) {
      alert("Please fill all required fields properly.");
      return;
    }

    // Filter packages dynamically
    const packages = document.querySelectorAll(".package-item");
    packages.forEach((packageItem) => {
      const packagePrice = parseInt(packageItem.getAttribute("data-price"), 10);
      const packageDestination = packageItem
        .getAttribute("data-destination")
        .toLowerCase();

      // Show or hide based on search criteria
      if (
        packagePrice <= maxPrice &&
        packageDestination.includes(toCity)
      ) {
        packageItem.style.display = "block";
      } else {
        packageItem.style.display = "none";
      }
    });

    alert(
      `Search initiated:\nFrom: ${fromCity}\nTo: ${toCity}\nDate: ${departureDate}\nAdults: ${adults}\nChildren: ${children}\nMax Price: ₹${maxPrice}`
    );
  });
});





// DOM Elements
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const durationRange = document.getElementById("durationRange");
const durationValue = document.getElementById("durationValue");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const packageItems = document.querySelectorAll(".package-item");

// Update price range value dynamically
priceRange.addEventListener("input", function () {
  priceValue.textContent = `Up to ₹${parseInt(priceRange.value).toLocaleString()}`;
  filterPackages();
});

// Update duration range value dynamically
durationRange.addEventListener("input", function () {
  durationValue.textContent = `Up to ${durationRange.value} Days`;
  filterPackages();
});

// Listen to checkbox changes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterPackages);
});

// Filter packages based on selected criteria
function filterPackages() {
  const selectedDestinations = Array.from(
    document.querySelectorAll(".destination:checked")
  ).map((checkbox) => checkbox.value);

  const selectedPackageTypes = Array.from(
    document.querySelectorAll(".package-type:checked")
  ).map((checkbox) => checkbox.value);

  const selectedTransports = Array.from(
    document.querySelectorAll(".transport:checked")
  ).map((checkbox) => checkbox.value);

  const maxPrice = parseInt(priceRange.value);
  const maxDuration = parseInt(durationRange.value);

  packageItems.forEach((packageItem) => {
    const destination = packageItem.getAttribute("data-destination");
    const price = parseInt(packageItem.getAttribute("data-price"));
    const type = packageItem.getAttribute("data-type");
    const transport = packageItem.getAttribute("data-transport");
    const duration = parseInt(packageItem.getAttribute("data-duration"));

    // Check if package meets all filter criteria
    const matchesDestination =
      selectedDestinations.length === 0 || selectedDestinations.includes(destination);
    const matchesType =
      selectedPackageTypes.length === 0 || selectedPackageTypes.includes(type);
    const matchesTransport =
      selectedTransports.length === 0 || selectedTransports.includes(transport);
    const matchesPrice = price <= maxPrice;
    const matchesDuration = duration <= maxDuration;

    if (
      matchesDestination &&
      matchesType &&
      matchesTransport &&
      matchesPrice &&
      matchesDuration
    ) {
      packageItem.style.display = "block"; // Show package
    } else {
      packageItem.style.display = "none"; // Hide package
    }
  });

  // Update filter counts
  updateFilterCounts();
}

// Update filter counts dynamically
function updateFilterCounts() {
  const destinationCheckboxes = document.querySelectorAll(".destination");
  const packageTypeCheckboxes = document.querySelectorAll(".package-type");
  const transportCheckboxes = document.querySelectorAll(".transport");

  // Function to calculate count for a filter
  const calculateCount = (attribute, value) => {
    return Array.from(packageItems).filter((packageItem) => {
      const matchesAttribute = packageItem.getAttribute(attribute) === value;
      const matchesVisibility = packageItem.style.display !== "none";
      return matchesAttribute && matchesVisibility;
    }).length;
  };

  // Update destination counts
  destinationCheckboxes.forEach((checkbox) => {
    const count = calculateCount("data-destination", checkbox.value);
    checkbox.nextSibling.textContent = ` ${checkbox.value} (${count})`;
  });

  // Update package type counts
  packageTypeCheckboxes.forEach((checkbox) => {
    const count = calculateCount("data-type", checkbox.value);
    checkbox.nextSibling.textContent = ` ${checkbox.value} (${count})`;
  });

  // Update transport counts
  transportCheckboxes.forEach((checkbox) => {
    const count = calculateCount("data-transport", checkbox.value);
    checkbox.nextSibling.textContent = ` ${checkbox.value} (${count})`;
  });
}

// Initial filter to apply on page load
filterPackages();


// see more js script
document.getElementById('toggle-more').addEventListener('click', function() {
  const hiddenDestinations = document.querySelector('.hidden-destinations');
  const isHidden = hiddenDestinations.style.display === 'none';

  if (isHidden) {
    hiddenDestinations.style.display = 'block';
    this.textContent = 'See Less';
  } else {
    hiddenDestinations.style.display = 'none';
    this.textContent = 'See More';
  }
});
//see more js script end


