const products = [
  {
    id: 1,
    productName: "Yellow Dunk Cards",
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: true,
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/yellow-card.png",
  },
  {
    id: 2,
    productName: "Red Dunk Cards",
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: false,
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/red-card.png",
  },
  {
    id: 3,
    productName: "Blue Dunk Cards",
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: false,
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/blue-card.png",
  },
  {
    id: 4,
    productName: "Pink Dunk Cards",
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: true,
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/pink-card.png",
  },
  {
    id: 5,
    productName: "Dunk Cards",
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: true,
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/yellow-card.png",
  },
  {
    id: 6,
    productName: "Dunk Cards",
    productDescription: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    availability: true,
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      one: `$1.99`,
      two: `$1.49`,
      three: `$0.99`,
    },
    imageUrl: "./images/red-card.png",
  },
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

      <div class="specifications">
        <header>
          <h5>Specifications</h5>
        </header>
        <p>Size: ${product['specifications'].size}</p>
        <p>Size: ${product['specifications'].weight}</p>
        <footer>
          <p>Specifications are valid until ${product['specifications'].valid}</p>
        </footer>
      </div>

      <div class="pricing">
        <header>
          <h5>Pricing</h5>
        </header>
        <p>1: ${product['pricing'].one}</p>
        <p>2-50: ${product['pricing'].two}</p>
        <p>51+: ${product['pricing'].three}</p>
      </div>
    </div>
    `;
  }

  renderToDom('#app', domString);
};

cardsOnDom(products);
