// REPLACE YOUR ENTIRE script.js WITH THIS

const form = document.getElementById("orderForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  // GET VALUES

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const cakeType = document.getElementById("cakeType").value;
  const cakeSize = document.getElementById("cakeSize").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  const cakeMessage = document.getElementById("cakeMessage").value;
  const instructions = document.getElementById("instructions").value;

  const eggless = document.getElementById("eggless").checked
    ? "Yes"
    : "No";

  // WHATSAPP NUMBER
  // CHANGE THIS

  const bakeryNumber = "919920932964";

  // MESSAGE

  const message = `
🍰 *New Cake Order - Manju's Bakery*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Address:
${address}

🎂 Cake Type: ${cakeType}

⚖️ Cake Size: ${cakeSize}

🥚 Eggless: ${eggless}

📅 Delivery Date:
${deliveryDate}

📝 Cake Message:
${cakeMessage}

✨ Special Instructions:
${instructions}
`;

  // ENCODE MESSAGE

  const encodedMessage = encodeURIComponent(message);

  // OPEN WHATSAPP

  const whatsappURL =
    `https://wa.me/${bakeryNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

});