let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

function getAddCategory(arrProducts, protoCategory) {
    arrProducts.forEach(element => {
        element.__proto__ = protoCategory;
    });
};

getAddCategory(kitchenProducts, Kitchen);
getAddCategory(devicesProducts, Devices);
getAddCategory(cosmeticsProducts, Cosmetics);

let arrAllProducts = [...kitchenProducts, ...devicesProducts, ...cosmeticsProducts];

let divItemKitch = [];
let divItemDev = [];
let divItemCosm = [];

let divProdCategKitch = "";
let divProdCategDev = "";
let divProdCategCosm = "";

arrAllProducts.forEach(element => {
    function getCreatdivItemProd() {
        return `<div class="product__item">
                    <img src="./images/${element.__proto__.category}/${element.type}.svg" alt="${element.type}" class="product__img">
                    <p class="product__name">
                        Name: 
                        <span>
                            ${element.type}
                        </span>
                    </p>
                    <p class="product__price">
                        Price: 
                        <span>$${(Boolean(element.price[1]) === true) ? element.price[0] + "-" + element.price[1] : element.price}</span>
                    </p>
                </div>`};
    if (element.__proto__.category === Kitchen.category) {
        divItemKitch.push(getCreatdivItemProd());
        divProdCategKitch =
            `<div class="product__category">
                <h2 class="product__title">
                    Category: ${element.__proto__.category}
                </h2>
                <div class="product__wrap">
                    ${divItemKitch.join("")}
                </div>
            </div>`;
    } else if (element.__proto__.category === Devices.category) {
        divItemDev.push(getCreatdivItemProd());
        divProdCategDev =
            `<div class="product__category">
                <h2 class="product__title">
                    Category: ${element.__proto__.category}
                </h2>
                <div class="product__wrap">
                    ${divItemDev.join("")}
                </div>
            </div>`;
    } else {
        divItemCosm.push(getCreatdivItemProd());
        divProdCategCosm =
            `<div class="product__category">
                <h2 class="product__title">
                    Category: ${element.__proto__.category}
                </h2>
                <div class="product__wrap">
                    ${divItemCosm.join("")}
                </div>
            </div>`;
    }
});

let divAllProd = `
    <div class="product">
        ${divProdCategKitch + divProdCategDev + divProdCategCosm}
    </div>`;

document.write(divAllProd);