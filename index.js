// Get the elements from the html document
const notifications = document.querySelectorAll(".notification");
const unreadCount = document.querySelector(".notification-header span");
const markAll = document.querySelector(".notification-header button");
const display = document.querySelector(".notification-header .unreadCount");

// Add a click event listener to each notification
notifications.forEach(notification => {
  notification.addEventListener("click", () => {
    // Toggle the unread class
    notification.classList.toggle("unread");
    // Update the unread count
    updateUnreadCount();
  });
});

// Add a click event listener to the mark all as read element
markAll.addEventListener("click", () => {
  // Loop through the notifications and remove the unread class
  notifications.forEach(notification => {
    notification.classList.remove("unread");
    notification.querySelector(".fa-solid.fa-circle.icon").classList.toggle("fa-circle");
  });
  // Update the unread count
  updateUnreadCount();
});

// Define a function to update the unread count
function updateUnreadCount() {
  // Get the number of notifications with the unread class
  const unread = document.querySelectorAll(".notification.unread").length;
  // Set the text content of the unread count element
  unreadCount.textContent = unread;
  // Display the unread count
  displayUnreadCount();
}

// Define a function to display the unread count
function displayUnreadCount() {
  // Append the unread count to the display element
  display.textContent += ` (${unread})`;
}

// Update and display the unread count initially
updateUnreadCount();
displayUnreadCount();
