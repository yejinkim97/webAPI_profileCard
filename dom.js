// Create an <img> element for the profile's avatar
function createImg(url, alt) {
  const img = new Image();

  img.src = url;
  img.alt = alt;
  img.className = 'avatar';
  img.width = 128;
  img.height = 128;

  return img;
}

// Create an <h2> element for the profile's name
function createName(value) {
  const h2 = document.createElement('h2');
  h2.innerText = value;
  return h2;
}

// Create an <h3><a>...</a></h3> element for the profile's email
function createEmail(value) {
  const link = document.createElement('a');
  link.href=`mailto:${value}`;
  link.innerHTML = value;

  const h3 = document.createElement('h3');
  h3.appendChild(link);
  return h3;
}

// Create and combine the name and email elements together in a <div>
function createUserInfo(name, email) {
  const userInfoEl = document.createElement('div');
  userInfoEl.className = 'user-info';

  const nameEl = createName(name);
  const emailEl = createEmail(email);

  userInfoEl.appendChild(nameEl);
  userInfoEl.appendChild(emailEl);

  return userInfoEl;
}

// Create the entire profile card, with img, name, email etc.
function createCard(id, name, email, avatarUrl) {
  const section = document.createElement('section');
  section.id = `user-${id}`;
  section.className = 'profile-card';

  const imgEl = createImg(avatarUrl, name);
  const userInfoEl = createUserInfo(name, email);

  section.appendChild(imgEl);
  section.appendChild(userInfoEl);

  return section;
}

module.exports.createImg = createImg;
module.exports.createName = createName;
module.exports.createEmail = createEmail;
module.exports.createUserInfo = createUserInfo;
module.exports.createCard = createCard;
