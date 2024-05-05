Algorithm:
1. Traverse through the data Array.
2. Individually accessing each product's Object.
3. Inject relevant details like title, category, and rating count in the below-mentioned HTML template to make a div.card.
4. To make the rating stars:

4.1. Round off the rating.rate value of an object to the nearest Integer
4.2. Use this value to determine the number of empty and filled stars out of 5. (Ex: For a rating of 3/5 => 3 filled stars and 2 empty stars)
4.3. Utilise these values in a loop to make filled and empty stars
4.4. To make filled star symbol use a span tag with text as '&#9733;' and for empty star use '&#9734;'
4.5. Note that it is important to add class of 'star__filled' and 'star__notfilled' for respective cases. (To pass final test case)
4.5. Wrap these stars (span tags) inside a div with class 'all__star'. The final result should be as shown below.
<!-- <div class="all__star">
<span class="star__filled">&#9733;</span>
<span class="star__filled">&#9733;</span>
<span class="star__filled">&#9733;</span>
<span class="star__filled">&#9733;</span>
<span class="star__notfilled">&#9734;</span>
</div> -->
5. Finally, after the div.card is ready with all the details injected, add it to div#container