// Data produk berdasarkan ID
const products = {
    "1": {
      image: "../img/20-2.png",
      title: "Premium Dog Food",
      description: "Pro Plan Sensitive Skin & Stomach Puppy Dog 3 kg",
      price: "Rp. 329.820",
      details: `
        This premium dog food is crafted from high-quality ingredients, including salmon and mackerel, to provide the optimal nutrition your pet deserves. 
        Its unique formula is designed to promote healthy skin and a shiny, luxurious coat, thanks to essential nutrients that reduce shedding and strengthen hair follicles. 
        The protein source derived from salmon helps minimize the risk of food-related reactions and skin issues.

        Enriched with colostrum, this dog food supports a robust immune system, while a specialized blend of nutrients helps maintain joint health, making it perfect for active puppies. 
        The formulation also prioritizes oral and dental health, ensuring comprehensive care for your dog.

        Free from artificial colors, flavors, and preservatives, this product offers a natural and easily digestible texture. 
        Its delicious flavor and enticing aroma are loved by dogs, making mealtime enjoyable.

        This food is also suitable for pregnant or nursing female dogs and ideal for puppies with sensitive skin. 
        With a 3 kg package and product dimensions of 15 x 24 x 37 cm, it’s a convenient and nutritious choice for your pet.
      `
    },
    "2": {
      image: "../img/exclusive-2.png",
      title: "Pet Carrier",
      description: "Grey Dog Carrier Pet Carrier Portable",
      price: "Rp. 351.000",
      details: `
        For Pets 
        Easy to carry 
        Material : Plastic, Iron
        Product Dimensions: 48 x 33 x 18 cm
      `
    },
    "3": {
      image: "../img/22-1.png",
      title: "Dog Leash",
      description: "Pink Choker Dog Motif With Bell",
      price: "Rp. 69.900",
      details: `
        The motif is interesting, equipped with hook holes, clips, and rattle accessories. The strap can be adjusted. 
        Easy to install, convenient to use. quality material, strong and durable. 
        Suitable as a marker and helps to take away the dog.
        M size : 34-52 cm
      `
    },
    "4": {
      image: "../img/exclusive-1-1.png",
      title: "Wet Tissue",
      description: "Antibacterial Pet Cleaning Wipes",
      price: "Rp. 39.900",
      details: `
        pet cleaning wipes. made from natural ingredients.

        can protect against germs and bacteria. can soften and moisturize. eliminate odors on the animal's body. suitable for daily use.
        Contents: 80 sheets of tissue
      `
    },
    "5": {
      image: "../img/23-1.png",
      title: "Dog Toys",
      description: "Dog Toys Eco Lars",
      price: "Rp. 149.842",
      details: `
        train animal stimulus.
        safe for dogs to play
        product dimensions: 34 x 11 x 7 cm
        cute and adorable design
      `
    },
    "6": {
      image: "../img/18-2.png",
      title: "Snacks",
      description: "pork jerky dog ​​snacks",
      price: "Rp. 127.302",
      details: `
        ingredients : pork, starch, gluten, sugar, sorbitol, glycerin,propylene glycol,
        salt, sodium erythorbate, sodium nitrite, potassium sorbate.

        Best seller from japan
      `
    },
    "7": {
      image: "../img/21-1.png",
      title: "Comfortable Bed",
      description: "multifunctional pet bed",
      price: "Rp. 150.000",
      details: `
        comfortable pad. suitable for dogs. multifunctional design.
        eco-friendly material
        product dimensions: 40 x 40 x 40
      `
    },
    "8": {
      image: "../img/19-21.png",
      title: "Dog Leash",
      description: "coolpet medium dog collar",
      price: "Rp. 26.910",
      details: `
        Adjustable strap. There is a clip. Equipped with a hook hole. Easy to install. Comfortable to use.

        Quality material, strong and durable. Suitable for carrying dogs.
        Size: 34-52 cm
        Material: Nylon
      `
    },
    "9": {
        image: "../img/image-41.png",
        title: "Soft Dog Diapers",
        description: "soft female dog diaper",
        price: "Rp. 62.900",
        details: `
            Disposable dog diapers are designed for maximum absorption, ensuring liquids quickly turn into gel for a fast-drying and mess-free experience. The breathable outer layer and stereoscopic edges provide leak-proof protection,
            while the elastic waistband adjusts comfortably to fit various sizes.

            These diapers feature a magic sticker or tape that secures snugly without sticking to your dog's fur, along with a urine indicator for added convenience. They are thoughtfully designed with a tail hole and a surface that feels smooth and soft, 
            ensuring your dog's comfort during use.

            The diapers come with three delightful mixed patterns, making them not only practical but also visually appealing. They are perfect for large female dogs with a waist circumference of 15–23 inches and weighing 22–30 lbs. 
            Each set contains 10 pieces in an extra-large size, crafted from high-quality materials such as non-woven fabric, wooden pulp, and SAP (superabsorbent polymer).
        `
    },
    "10": {
      image: "../img/image-40.png",
      title: "Paw Pet Spa Butter",
      description: "dog paw balm moisturizer",
      price: "Rp. 31.920",
      details: `
            moisturizes the soles of the feet or paws of dogs.
            safe for daily or routine use.
      `
    },
    "11": {
      image: "../img/25-1.png",
      title: "Dog Bed",
      description: "eco cushion dog bed size s",
      price: "Rp. 577.932",
      details: `
            Product dimensions: 60 x 50 x 23 cm
            Materials:
            Cover: polyester, natural material.
            Filling: recycled plastic bottles
            Size: s
      `
    },
    "12": {
      image: "../img/24-1.png",
      title: "Wet Wipes",
      description: "animal eye cleaning wet wipes",
      price: "Rp. 29.000",
      details: `
            soft and smooth wet tissue efficient for cleaning eyes and surrounding areas.

            protects from germs or bacteria. easy to carry when traveling. suitable for dogs and cats
      `
    },
      // Tambahkan produk lain di sini

};

function updateProduct(productId) {
    const product = products[productId];
    if (product) {
      document.getElementById("product-image").src = product.image;
      document.getElementById("product-title").textContent = product.title;
      document.getElementById("product-description").textContent = product.description;
      document.getElementById("product-price").textContent = product.price;
      document.getElementById("product-details").textContent = product.details;
    } else {
      console.error("Product with ID " + productId + " not found.");
    }
  }
  
// Fungsi untuk memuat produk default (misalnya ID 1) saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || "1"; // Mengambil ID dari URL, default ID 1
  updateProduct(productId);
});

// Select elements
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityInput = document.getElementById('quantity-input');
const addToCartBtn = document.querySelector('.add-to-cart');
const cart = [];

// Increase quantity
increaseBtn.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Decrease quantity
decreaseBtn.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
});

// Add to cart functionality
addToCartBtn.addEventListener('click', () => {
  const productImage = document.getElementById('product-image').src;
  const productTitle = document.getElementById('product-title').textContent;
  const productDescription = document.getElementById('product-description').textContent;
  const productPrice = document.getElementById('product-price').textContent;
  const productQuantity = parseInt(quantityInput.value);

  if (productQuantity > 0) {
    const product = {
      image: productImage,
      title: productTitle,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
    };

    cart.push(product);
    alert(`${product.title} added to cart!`);
    console.log('Cart:', cart); // Debugging: show the cart in console
  } else {
    alert('Please select a quantity greater than 0.');
  }
});
