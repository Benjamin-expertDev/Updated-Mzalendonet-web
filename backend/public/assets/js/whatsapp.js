// your-script.js

document.addEventListener("DOMContentLoaded", function () {
    const widgetContainer = document.createElement("div");
    widgetContainer.id = "whatsapp-widget";
    widgetContainer.className = "whatsapp-widget";

    const whatsappLink = document.createElement("a");
    whatsappLink.id = "whatsapp-link";
    whatsappLink.href = "#"; 

    // Incase Mzalendo changes their phone no, change
    const phoneNumber = "0748329740";

    
    const iconPath = "assets/img/icons8-whatsapp.gif";

    
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    whatsappLink.href = whatsappURL;

    // Create the WhatsApp icon
    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = iconPath;
    whatsappIcon.alt = "Chat with us";
    whatsappIcon.style.width = "60px";
    whatsappIcon.style.height = "60px"; 

    
    whatsappLink.appendChild(whatsappIcon);

    
    widgetContainer.appendChild(whatsappLink);

    
    document.body.appendChild(widgetContainer);
});
