import { data } from "./data.js";
const cardContainer = document.getElementById("container");


const starfilled = '<span class="star__filled">&#9733;</span>';
const starnotfilled = '<span class="star__notfilled">&#9734;</span>';

for (const card of data) {
    let coloredStar = parseInt(card.rating.rate);
        let notColoredStar = 5 - coloredStar;

        let allStardiv = ''; // Initialize empty string for all__star HTML

        // Append filled stars
        for (let i = 0; i < coloredStar; i++) {
            allStardiv += `<span class="star__filled">&#9733;</span>`;
        }

        // Append empty stars
        for (let i = 0; i < notColoredStar; i++) {
            allStardiv += `<span class="star__notfilled">&#9734;</span>`;
        }
   const cardHTML = document.createElement('div');
   cardHTML.classList.add("card");
   cardHTML.innerHTML = `
         <div class="details"> 
    <span class="product__name">${card.title}</span>
                <br>
                <span class="product__category">${card.category}</span>
                <div class="all__star">
                   ${allStardiv}
                </div>
                <div class="rating__count">Rating Count : <span>${card.rating.count}</span></div>
            </div>
            <div class="btn">
                <button class="btn__buy">Buy Now</button>
            </div>`;

   cardContainer.append(cardHTML);
}

