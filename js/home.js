const productsRow = document.querySelector(".product-cards-row");
const loading = document.querySelector(".loading");

loading.innerHTML = `
     <div class="atom">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
     </div>
`

function getProductsRow({description ,title ,id,  images , stock , rating ,price , discountPercentage}){
    return `
    <div class="product-card">
        <div class="card-top">
            <div class="sale-btns">
                <div class="remove-sales">
                <img src=${stock?`./images/dis-true.svg`:`./images/close.svg`} alt="close svg" />
                <p>${stock?`В наличии`:`Нет в наличии`}</p>
                <div class="gift">
                    <img src="./images/gift.svg" alt="gift svg" />
                    <p>Подарок</p>
                </div>
                </div>
                <button>SALE</button>
            </div>
            <a href="../pages/catalog.html?id=${id}">
                <img class="key-img" src=${images[0]} alt="key png" />
            </a>
        </div>
        <div class="card-bottom">
            <div class="card-stars">
                <div class="d">
                    <img src=${rating >= 1? './images/start.svg' : './images/star.svg'} alt="star svg" />
                    <img src=${rating >= 2? './images/start.svg' : './images/star.svg'} alt="star svg" />
                    <img src=${rating >= 3? './images/start.svg' : './images/star.svg'} alt="star svg" />
                    <img src=${rating >= 4? './images/start.svg' : './images/star.svg'} alt="star svg" />
                    <img src=${rating >= 4.5? './images/start.svg' : './images/star.svg'} alt="star svg" />
                </div>
                <p>${title.slice(0 , 11)}</p>
            </div>
            <p class="card-title">${description}</p>
            <div class="prices">
                <h3 class="dis-price">$${Math.round(price - price * discountPercentage / 100)}</h3>
                <p class="pre-price">$${price}</p>
            </div>
        </div>
    </div>
    `
}

async function getProducts() {
    const {data} = await axios.get(`https://dummyjson.com/products`);
    const products = data.products;
    console.log(products);
    products.map((product) => {
        productsRow.innerHTML += getProductsRow(product);
    })
    loading.style.display = "none"
}

getProducts();