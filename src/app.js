const users = require("./users");
const ProfileCard = require("./components/profile-card");

function init() {
  // Safe to query for DOM nodes now that window is loaded
  const main = document.querySelector("main");
  const body = document.querySelector("body");
  // Load all users from web API as JSON and process into DOM nodes
  let pageNumber = 1;
  users
    .load(pageNumber)
    // We have to wait for the fetch() response's Promise to complete
    .then((users) => {
      // If we couldn't load any users, indicate that
      if (!(users && users.length)) {
        main.innerHTML = "Unable to load user data at this time.";
        return;
      }

      // Otherwise, iterate across all the users
      users.forEach((user) => {
        // Extract and prepare the user properties we care about
        const id = user.id;
        const name = `${user.first_name} ${user.last_name}`;
        const email = user.email;
        const avatarUrl = user.avatar;

        // Create a ProfileCard of DOM nodes for each user
        const profileCard = new ProfileCard(id, name, email, avatarUrl);


        // Append the user's ProfileCard DOM nodes to our document's main element
        main.appendChild(profileCard.render());
      });
    const btn = document.createElement("button");
     btn.innerHTML = "Load more";
       btn.onclick = function () {
        let change = document.querySelectorAll(".profile-card2");
        change.forEach(function(item){
          console.log(item);
          item.style.display = "flex";  
        })
        btn.style.display="none";
       };
     const div = document.createElement("div");
      body.appendChild(div);

     if ((users.length = 6)) {
       div.appendChild(btn);
      }
    });
}

window.onload = init;
