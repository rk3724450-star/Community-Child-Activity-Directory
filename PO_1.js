let activities = [
  {
    name: "Little Artists",
    age: "3-5",
    schedule: "Saturday, 10:00 AM",
    location: "Community Art Centre",
    cost: "₹150 per class",
    description: "A fun drawing and painting session for young children."
  },
  {
    name: "Junior Football Club",
    age: "6-8",
    schedule: "Sunday, 4:00 PM",
    location: "City Sports Ground",
    cost: "₹200 per month",
    description: "Learn teamwork and basic football skills."
  },
  {
    name: "Young Science Explorers",
    age: "9-12",
    schedule: "Friday, 3:30 PM",
    location: "Community Learning Hall",
    cost: "Free",
    description: "Simple science experiments and exciting discoveries."
  },
  {
    name: "Story and Play",
    age: "3-5",
    schedule: "Wednesday, 11:00 AM",
    location: "Public Library",
    cost: "Free",
    description: "Stories, games and activities that build imagination."
  }
];

// Display activities on the webpage
function showActivities() {
  let list = document.getElementById("activityList");
  let searchText = document.getElementById("searchInput").value.toLowerCase();
  let ageValue = document.getElementById("ageFilter").value;

  list.innerHTML = "";

  let filteredActivities = activities.filter(function(activity) {
    let matchesText =
      activity.name.toLowerCase().includes(searchText) ||
      activity.location.toLowerCase().includes(searchText);

    let matchesAge = ageValue === "all" || activity.age === ageValue;

    return matchesText && matchesAge;
  });

  if (filteredActivities.length === 0) {
    list.innerHTML = "<p>No activities found. Try another search.</p>";
    return;
  }

  filteredActivities.forEach(function(activity) {
    let card = document.createElement("div");
    card.className = "activity-card";

    card.innerHTML = `
      <h3>${activity.name}</h3>
      <span class="tag">Age ${activity.age} years</span>
      <p><strong>Schedule:</strong> ${activity.schedule}</p>
      <p><strong>Location:</strong> ${activity.location}</p>
      <p><strong>Cost:</strong> ${activity.cost}</p>
      <p>${activity.description}</p>
    `;

    list.appendChild(card);
  });
}

// Add a new activity using the form
document.getElementById("activityForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let newActivity = {
    name: document.getElementById("activityName").value,
    location: document.getElementById("activityLocation").value,
    age: document.getElementById("activityAge").value,
    schedule: document.getElementById("activitySchedule").value,
    cost: document.getElementById("activityCost").value,
    description: "A community activity suggested by a user."
  };

  activities.push(newActivity);
  showActivities();

  document.getElementById("activityForm").reset();
  document.getElementById("message").textContent =
    "Activity added successfully! (It will reset when the page is refreshed.)";
});

// Show the sample activities when page opens
showActivities();