
// find the fetchProfile button 
// add onclick event on fetchProfile button
// get value of the nearest input
// save value in the var
// also  append the value in the api url
// make API call
// await for response 
// convert serponse to json
// store json into the object
// populate image and name elements using ID selector
// create a HTML structure for remaining profile
// get values from object and append in html 
// append HTML to DOM using append


const userDetailEndpoint = 'https://api.github.com/users/'
let fetchProfileButton = document.getElementById('fetchProfile');
let usernameInput = document.getElementById('usernameInput');
let userNameInputValue;


usernameInput.addEventListener('keyup', function (e) {
   userNameInputValue = e.target.value;
   console.log(userNameInputValue);
});

usernameInput.addEventListener('keypress', function (e) {
   if (e.key === 'enter') {
      fetchUserProfile(userNameInputValue);
   }
});

fetchProfileButton.addEventListener('click', function (e) {
   fetchUserProfile(userNameInputValue);
});


async function fetchUserProfile(userName) {
   const currentUserEndpoint = userDetailEndpoint + userName;
   console.log('API : ' + currentUserEndpoint);
   try {
      let userResponse = await fetch(currentUserEndpoint);
      let userDetailJson = await userResponse.json();
      console.log(userDetailJson);
      updateUserDetails(userDetailJson);
   } catch (error) {
      console.log(error.message);
   }
}

function updateUserDetails(userDetails) {
   let userImageDiv = document.getElementById('avatar');
   let userNameDiv = document.getElementById('name');
   let userDetailDiv = document.getElementById('details');

   const userName = userDetails.name;
   const userImage = userDetails.avatar_url;


   userImageDiv.setAttribute('src', userImage);
   userNameDiv.innerText = userName;
   userDetailDiv.innerHTML = `<p>Username: ${userDetails.login}</p>
            <p>Location: ${userDetails.location}</p>
            <p>Email:${userDetails.login}</p>
            <p>Company: <a href="${userDetails.company}">Company Details</a></p>
            <p>Blog: <a href="${userDetails.blog}</a></p>
            <p>${userDetails.bio}</p>
            <p>Twitter: <a href="https://twitter.com/${userDetails.twitter_username}">${userDetails.twitter_username}</a></p>
            <p>Followers: ${userDetails.followers}</p>
            <p>Following: ${userDetails.following}</p>
            <p>Public Repos: ${userDetails.public_repos}</p>
            <p>Public Gists: ${userDetails.public_gists}</p>
            <p>Member since: ${userDetails.created_at}</p>
            <p>Last updated: ${userDetails.updated_at}</p>`;
   userDetailDiv.style.display = 'grid';
}