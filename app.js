const users = require('./users');
const Profile = require('./profile');

function init() {
  // Safe to query for DOM nodes now that window is loaded
  const main = document.querySelector('main');

  // Load all users from web API as JSON and process into DOM nodes
  users.load()
    // We have to wait for the fetch() response's Promise to complete
    .then(users => {
      // If we couldn't load any users, indicate that
      if(!(users && users.length)) {
        main.innerHTML = 'Unable to load user data at this time.';
        return;
      }

      // Otherwise, iterate across all the users
      users.forEach(user => {
        // Turn each raw User object into a Profile object
        const profile = new Profile(user);

        // Use the Profile object to create a tree of DOM nodes
        const profileEl = profile.render();

        // Append these DOM nodes to our document's main element
        main.appendChild(profileEl);
      })
    });
}

window.onload = init;
