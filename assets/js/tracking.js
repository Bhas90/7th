/*
=============================================
7th Heaven Cakes
Tracking Events
=============================================
*/

function trackClick(eventName, itemName) {
  const eventData = {
    item_name: itemName || "Unknown",
    page_name: "7th Heaven Cakes Landing Page",
    timestamp: new Date().toISOString()
  };

  if (typeof gtag === "function") {
    gtag("event", eventName, eventData);
  }

  if (typeof fbq === "function") {
    fbq("trackCustom", eventName, eventData);
  }

  console.log("Tracked:", eventName, eventData);
}

function trackPageView() {
  trackClick("landing_page_view", "7th Heaven Cakes");
}

document.addEventListener("DOMContentLoaded", function () {
  trackPageView();
});