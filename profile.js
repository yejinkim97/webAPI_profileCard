// All of our DOM related code lives in dom.js and we only need createCard() here.
const { createCard } = require('./dom');

// The Profile class defines an Object template we'll use to work with profile data
class Profile {
  // We accept the relevant data for a profile via the constructor
  constructor(user) {
    this.id = user.id;
    this.name = `${user.first_name} ${user.last_name}`;
    this.email = user.email;
    this.avatarUrl = user.avatar;
  }

  // Create a DOM node representing this user profile with image, name, email
  render() {
    return createCard(this.id, this.name, this.email, this.avatarUrl)
  }
}

module.exports = Profile;
