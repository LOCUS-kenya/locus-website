// ==========================================
// LOCUS WHATSAPP SETTINGS
// ==========================================

const locusWhatsApp = "254180869616";


// ==========================================
// BOOK A DELIVERY
// ==========================================

function bookDelivery() {

    const message =
        "Hello Locus 👋%0A%0A" +
        "I would like to book a delivery.%0A%0A" +
        "Please help me with the booking.";

    const whatsappURL =
        `https://wa.me/${locusWhatsApp}?text=${message}`;

    window.open(whatsappURL, "_blank");
}


// ==========================================
// BECOME A LOCUS RIDER
// ==========================================

function becomeRider() {

    const message =
        "Hello Locus 👋%0A%0A" +
        "I am interested in becoming a Locus rider.%0A%0A" +
        "Please send me the requirements and application details.";

    const whatsappURL =
        `https://wa.me/${locusWhatsApp}?text=${message}`;

    window.open(whatsappURL, "_blank");
}


// ==========================================
// BUSINESS CONTACT
// ==========================================

function businessContact() {

    const message =
        "Hello Locus 👋%0A%0A" +
        "I am interested in Locus delivery services for my business.%0A%0A" +
        "I would like to discuss business delivery services.";

    const whatsappURL =
        `https://wa.me/${locusWhatsApp}?text=${message}`;

    window.open(whatsappURL, "_blank");
}


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


// ==========================================
// LOCUS SERVICE INFORMATION
// ==========================================

const serviceData = {

    parcel: {

        icon: "📦",

        label: "PARCEL DELIVERY",

        title: "Parcel Delivery",

        description:
            "Whether you are sending a document, package, personal item or business parcel, Locus helps you move it from pickup to destination with a reliable delivery process.",

        points: [
            "Documents and small packages",
            "Personal items and parcels",
            "Business-to-customer deliveries",
            "Customer-to-customer deliveries",
            "Pickup and drop-off within Nairobi",
            "Delivery confirmation when the order is completed"
        ]

    },


    errands: {

        icon: "🛍️",

        label: "ERRANDS & SHOPPING",

        title: "Errands & Shopping",

        description:
            "Don't have time to leave work, home or your business? Tell Locus what you need and we can help handle the collection, purchase or delivery.",

        points: [
            "Supermarket and grocery shopping",
            "Picking up items from shops",
            "Collecting documents or packages",
            "Purchasing requested everyday items",
            "Delivering items to your preferred location",
            "Useful for busy individuals and businesses"
        ]

    },


    business: {

        icon: "🏢",

        label: "BUSINESS DELIVERIES",

        title: "Business Deliveries",

        description:
            "Locus provides courier support for businesses that need dependable movement of documents, products, customer orders and other items around Nairobi.",

        points: [
            "Regular business deliveries",
            "Customer order deliveries",
            "Shop and office pickups",
            "Document transportation",
            "Scheduled delivery arrangements",
            "Courier support that can grow with your business"
        ]

    },


    laundry: {

        icon: "👕",

        label: "LAUNDRY DELIVERY",

        title: "Laundry Delivery",

        description:
            "Locus helps laundry businesses make pickup and delivery easier by moving customers' laundry between their homes and the laundry service.",

        points: [
            "Pickup laundry from customers",
            "Deliver clean laundry back to customers",
            "Support for laundry businesses",
            "Customer pickup and drop-off coordination",
            "Convenient delivery within Nairobi",
            "A delivery partner for growing laundry businesses"
        ]

    }

};


// ==========================================
// SHOW SERVICE
// ==========================================

function showService(service) {

    const data = serviceData[service];

    if (!data) {
        return;
    }

    const modal = document.getElementById("serviceModal");

    if (!modal) {
        console.error("Locus service modal was not found.");
        return;
    }

    document.getElementById("modalIcon").textContent =
        data.icon;

    document.getElementById("modalLabel").textContent =
        data.label;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalDescription").textContent =
        data.description;


    const list = document.getElementById("modalList");

    list.innerHTML = "";


    data.points.forEach(function(point) {

        const item = document.createElement("div");

        item.innerHTML = `
            <span>✓</span>
            <p>${point}</p>
        `;

        list.appendChild(item);

    });


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ==========================================
// CLOSE SERVICE
// ==========================================

function closeService() {

    const modal = document.getElementById("serviceModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


// ==========================================
// CLOSE WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById("serviceModal");

    if (modal) {

        modal.addEventListener("click", function(event) {

            if (event.target === modal) {
                closeService();
            }

        });

    }

});


// ==========================================
// CLOSE WITH ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeService();
    }

});