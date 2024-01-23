function getLink(url) {
  const favicon = `https://www.google.com/s2/favicons?domain=${url}`;
  return favicon;
}

document.addEventListener('DOMContentLoaded', () => {
  displayLinks();
});

export function displayLinks() {
  const linkList = document.getElementById('linkList');
  linkList.innerHTML = '';

  const links = JSON.parse(localStorage.getItem('links')) || [];

  links.forEach((link) => {
    const listItem = document.createElement('li');

    const imgEl = document.createElement('img');
    imgEl.src = link.img;
    listItem.appendChild(imgEl);

    // clickable link
    const linkElement = document.createElement('a');
    linkElement.textContent = link.name;
    linkElement.href = link.url;
    linkElement.target = '_blank';
    listItem.appendChild(linkElement);

    // "Remove" button
    const removeButton = document.createElement('button');
    removeButton.id = 'remove-button';
    removeButton.textContent = '-';
    removeButton.addEventListener('click', () => {
      removeLink(link);
    });

    listItem.appendChild(removeButton);
    linkList.appendChild(listItem);
  });
}

export function displayInputFields() {
  const inputFieldsDiv = document.getElementById('input-fields');
  const addLinkButton = document.getElementById('add-link');

  // Toggle the display of input fields
  if (
    inputFieldsDiv.style.display === 'none' ||
    inputFieldsDiv.style.display === ''
  ) {
    inputFieldsDiv.style.display = 'block';
    addLinkButton.textContent = '➖ Stäng länkformulär';
  } else {
    inputFieldsDiv.style.display = 'none';
    addLinkButton.textContent = '➕ Lägg till länk';
  }
}

export function removeLink(linkToRemove) {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  const updatedLinks = links.filter(
    (link) =>
      !(link.name === linkToRemove.name && link.url === linkToRemove.url)
  );
  localStorage.setItem('links', JSON.stringify(updatedLinks));

  displayLinks();
}

export function saveNewLink() {
  const newLinkNameInput = document.getElementById('newLinkName');
  const newLinkURLInput = document.getElementById('newLinkURL');

  const newLinkName = newLinkNameInput.value.trim();
  const newLinkURL = newLinkURLInput.value.trim();
  const img = getLink(newLinkURL);

  if (newLinkName && newLinkURL) {
    const existingLinks = JSON.parse(localStorage.getItem('links')) || [];
    existingLinks.push({ name: newLinkName, url: newLinkURL, img });
    localStorage.setItem('links', JSON.stringify(existingLinks));

    newLinkNameInput.value = '';
    newLinkURLInput.value = '';

    displayLinks();
  } else {
    alert('Please enter both new link name and a valid URL.');
  }
}
