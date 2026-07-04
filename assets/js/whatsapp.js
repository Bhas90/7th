/*
=============================================
7th Heaven Cakes
WhatsApp Message Generator
Version: 1.0
=============================================
*/

const WHATSAPP_NUMBER = "447359778589";

const messages = {

    "General Cake Order":
`Hi 7th Heaven 👋

I'd like to order a cake.

Could you please share:

• Available flavours
• Sizes
• Prices
• Collection / Delivery options

Thank you.`,



    "Birthday Cake":
`Hi 7th Heaven 🎂

I'm interested in ordering a Birthday Cake.

Could you please share:

• Available Designs
• Flavours
• Sizes
• Prices
• Collection Date

Thank you.`,



    "Graduation Cake":
`Hi 7th Heaven 🎓

I'd like to order a Graduation Cake.

Please share:

• Designs
• Flavours
• Sizes
• Prices

Thank you.`,



    "Anniversary Cake":
`Hi 7th Heaven ❤️

I'd like to order an Anniversary Cake.

Please share:

• Available Designs
• Flavours
• Sizes
• Prices

Thank you.`,



    "Custom Cake":
`Hi 7th Heaven 🎨

I'd like to order a Custom Cake.

Please let me know:

• Available Designs
• Theme Options
• Flavours
• Prices

Thank you.`,

"Current Offers":
`Hi 7th Heaven 👋

Could you please share today's cake offers?

Thank you.`,

"Store Enquiry":
`Hi 7th Heaven 👋

I'd like to enquire about cake orders from your Rugby store.

Please assist me.

Thank you.`,

    "Chocolate Cake":
`Hi 7th Heaven 🍫

I'd like to order a Chocolate Cake.

Please share available sizes and prices.`,



    "Vanilla Cake":
`Hi 7th Heaven 🍰

I'd like to order a Vanilla Cake.

Please share available sizes and prices.`,



    "Red Velvet Cake":
`Hi 7th Heaven ❤️

I'd like to order a Red Velvet Cake.

Please share available sizes and prices.`,



    "Black Forest Cake":
`Hi 7th Heaven 🌲

I'd like to order a Black Forest Cake.

Please share available sizes and prices.`,



    "Lotus Biscoff Cake":
`Hi 7th Heaven 🍪

I'd like to order a Lotus Biscoff Cake.

Please share available sizes and prices.`,



    "Oreo Cake":
`Hi 7th Heaven 🍪

I'd like to order an Oreo Cake.

Please share available sizes and prices.`,



    "Corporate Cake Order":
`Hi 7th Heaven 🏢

We're looking for Corporate Cake Orders.

Please share:

• Corporate Packages
• Bulk Pricing
• Delivery Options
• Lead Time

Company Name:

Approx Quantity:

Event Date:`,



    "School Event Enquiry":
`Hi 7th Heaven 🏫

We are organising a School Event.

Could you please share details regarding:

• School Fairs
• Graduation Events
• Sports Days
• Annual Functions

School Name:

Expected Guests:

Event Date:`,



    "Contact Page Enquiry":
`Hi 7th Heaven 👋

I'd like to enquire about your cakes.

Please contact me.

Thank you.`,



    "Urgent Cake Order":
`Hi 7th Heaven 🚨

I need a cake urgently.

Could you please let me know your earliest availability?

Thank you.`,



    "Sticky WhatsApp Enquiry":
`Hi 7th Heaven 👋

I'd like to order a cake.

Please assist me.

Thank you.`


};



function openWhatsApp(category){

    const message =
        messages[category] ||
        messages["General Cake Order"];


    // Track Google Analytics
    if(typeof trackClick === "function"){
        trackClick("whatsapp_click", category);
    }


    const url =
`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

}