const productRow = document.querySelector(".product-container");
const query = new URLSearchParams(location.search);

const loading = document.querySelector(".loading");

loading.innerHTML = `
     <div class="atom">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
     </div>
`

let product = query.get("id");
console.log(product);



function getProduction({title ,category , rating , stock , brand , description , discountPercentage ,images ,price }) {
  return `
  <img class="product-card" src=${images[2]} alt="key image" />
  <div class="product-info">
    <h1>${title}</h1>
    <p class="info-title">
      ${description}
    </p>
    <p class="info-title">
      Category:${category};  Brand:${brand} ; Rating:${rating}; Stock:${stock};
    </p>
    <span class="price">Price</span>
    <div class="product-price">
      <p>$${price - discountPercentage * price / 100}</p>
      <p class="pre-price">$${price}</p>
    </div>
    <button>KORZINKA</button>
  </div>
    `;
}

async function getProduct() {
  const res = await axios.get(`https://dummyjson.com/products/${product}`);
  console.log(res.data); 
  productRow.innerHTML += getProduction(res.data);
  loading.style.display = "none";
}
getProduct();
