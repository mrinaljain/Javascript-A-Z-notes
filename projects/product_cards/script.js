import { data}  from "./data.js";

const cardContainer = document.getElementById("container");

for (const card of data) {
   const cardHTML = document.createElement('div');
   cardHTML.classList.add("card");
   cardHTML.innerHTML = `
         <div class="details"> 
    <span class="product__name">${card.title}</span>
                <br>
                <span class="product__category">${card.category}</span>
                <div class="all__star">
                    <span class="${card.rating.rate >= 1 ? "star__filled" : "star__notfilled"}">
                    ${card.rating.rate >= 1 ? "&#9733;" : "&#9734;"}</span>
                    <span class="${card.rating.rate >= 2 ? "star__filled" : "star__notfilled"}">${card.rating.rate >= 2 ? "&#9733;" : "&#9734;"}</span>
                    <span class="${card.rating.rate >= 3 ? "star__filled" : "star__notfilled"}">${card.rating.rate >= 3 ? "&#9733;" : "&#9734;"}</span>
                    <span class="${card.rating.rate >= 4 ? "star__filled" : "star__notfilled"}">${card.rating.rate >= 4 ? "&#9733;" : "&#9734;"}</span>
                    <span class="${card.rating.rate >= 5 ? "star__filled" : "star__notfilled"}">${card.rating.rate >= 5 ? "&#9733;" : "&#9734;"}</span>
                </div>
                <div class="rating__count">Rating Count : <span>${card.rating.rate}</span></div>
            </div>
            <div class="btn">
                <button class="btn__buy">Buy Now</button>
            </div>`;
   cardContainer.append(cardHTML);
}

