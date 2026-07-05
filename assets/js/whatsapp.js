/*
=============================================
7th Heaven Cakes
WhatsApp Handler
=============================================
*/

function openWhatsApp(category) {

    const message =
        messages[category] ||
        messages["General Cake Order"];

    if (typeof trackClick === "function") {
        trackClick("whatsapp_click", category);
    }

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}