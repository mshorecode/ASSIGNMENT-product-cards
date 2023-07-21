const products = [
  {
    id: 1,
    productName: "the Solid Label",
    productDescription: "Unleash the power of music with this timeless medium, perfect for audiophiles seeking warm, rich tones and an authentic listening experience. ",
    availability: false,
    specifications: {
      size: `4" × 2½" × ½"`,
      weight: "1.43 oz",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/cassette.jpeg",
    soldOut: "./images/soldOut.png",
  },
  {
    id: 2,
    productName: "Clearly Labeled",
    productDescription: "Ideal for artists, collectors, and enthusiasts alike, this cassette tape promises to be your faithful companion on every sonic journey.",
    availability: true,
    specifications: {
      size: `4" × 2½" × ½"`,
      weight: "1.43 oz",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/cassette_2.jpg",
    soldOut: "./images/soldOut.png",
  },
  {
    id: 3,
    productName: "Clearly Clear",
    productDescription: "Its smooth surface reflects the passion and craftsmanship poured into its creation, showcasing a dedication to preserving the essence of a bygone era.",
    availability: true,
    specifications: {
      size: `4" × 2½" × ½"`,
      weight: "1.43 oz",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/cassette_3.jpg",
    soldOut: "./images/soldOut.png",
  },
  {
    id: 4,
    productName: "The Grab Bag",
    productDescription: "Immerse yourself in nostalgia as you unveil an assortment hidden gems from yesteryears. Each grab bag is thoughtfully curated, offering a delightful surprise!",
    availability: true,
    specifications: {
      size: `4" × 2½" × ½"`,
      weight: "1.43 oz",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/assortment.jpg",
    soldOut: "./images/soldOut.png",
  },
  {
    id: 5,
    productName: "The Bundle",
    productDescription: "We've combined the vintage allure of analog music with the practicality of modern protection. Rediscover the magic of cassettes while safeguarding your audio treasures in style.",
    availability: false,
    specifications: {
      size: `4" × 2½" × ½"`,
      weight: "2.8 oz",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/bundle.jpg",
    soldOut: "./images/soldOut.png",
    
  },
  {
    id: 6,
    productName: "Get Your Cases Here!",
    productDescription: "Crafted with precision and care, our cassette cases feature a sturdy construction that shields your tapes from dust, scratches, and other potential damage.",
    availability: true,
    specifications: {
      size: `4" × 2½" × ½"`,
      weight: "2.3 oz",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`
    },
    imageUrl: "./images/cases.jpg",
    soldOut: "./images/soldOut.png",
  }
];

const renderToDom = (divId, html) => {
  const targetedDiv = document.querySelector(divId);
  targetedDiv.innerHTML = html;
};

const cardsOnDom = (array) => {

  let domString = "";
  
  for(const product of array){
    
    domString += `
    <div class="card" style="width: 18rem;">
      <header id="title"> 
        <h2>${product.productName}</h2>
      </header>
      <div class="card-body">
        <div class="product">
          <img src="${product.imageUrl}" class="card-img-top img" alt="${product.productName}">
          ${!product.availability ? `<div class="container container_0">
            <img src="${product.soldOut}" class="sold-out">
          </div>` : ``}
        </div>
        <p class="description">${product.productDescription}</p>
        <p id="available">${product.availability ? `Available` : `Out-of-Stock`}</p>
      </div>

      <section class="specifications">
        <header>
          <h5>Specifications</h5>
        </header>
        <p class="specs">Size: ${product['specifications'].size}</p>
        <p class="specs">Weight: ${product['specifications'].weight}</p>
        <footer>
          <p class="valid">Specifications are valid until <b>${product['specifications'].valid}</b></p>
        </footer>
      </section>

      <section class="pricing">
        <header>
          <h5>Pricing</h5>
        </header>
        <p class="prices">1: ${product['pricing'].one}</p>
        <p class="prices">2-50: ${product['pricing'].two}</p>
        <p class="prices">51+: ${product['pricing'].three}</p>
      </section>
    </div>
    `;
  }

  renderToDom('#app', domString);
};

cardsOnDom(products);
