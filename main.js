const products = [
  {
    id: 1,
    productName: "Solid Label",
    productDescription: "Unleash the power of music with this timeless medium, perfect for audiophiles seeking warm, rich tones and an authentic listening experience. ",
    availability: true,
    specifications: {
      size: `4" x 4"`,
      weight: "8 oz.",
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
    availability: false,
    specifications: {
      size: `4" x 4"`,
      weight: "8 oz.",
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
    availability: false,
    specifications: {
      size: `4" x 4"`,
      weight: "8 oz.",
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
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: true,
    specifications: {
      size: `4" x 4"`,
      weight: "8 oz.",
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
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: true,
    specifications: {
      size: `4" x 4"`,
      weight: "8 oz.",
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
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: false,
    specifications: {
      size: `4" x 4"`,
      weight: "8 oz.",
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
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.productName}">
        <p class="description">${product.productDescription}</p>
        <p id="available">${product.availability ? `Available` : `Out-of-Stock`}</p>
      </div>

      <section class="sections">
        <header>
          <h5>Specifications</h5>
        </header>
        <p class="specs">Size: ${product['specifications'].size}</p>
        <p class="specs">Size: ${product['specifications'].weight}</p>
        <footer>
          <p class="valid">Specifications are valid until <b>${product['specifications'].valid}</b></p>
        </footer>
      </section>

      <section class="sections">
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
