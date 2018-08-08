class Contact {
  constructor(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

const form = document.querySelector('form')
const contactList = document.querySelector('ul');

form.addEventListener('submit', addContact);

// Add the event listener to the remove the contact to document body since the li that contains the contacts do not exist when the page loads
document.querySelector('body').addEventListener('click', function(e) {
  if(Array.from(e.target.classList).includes('close')) {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
  }
});

// Add contact to list
function addContact(e) {
  e.preventDefault();
  const firstName = getValue('first_name', e);
  const lastName = getValue('last_name', e);
  const phoneNumber = getValue('phone_number', e);
  const email = getValue('email', e);
  const contact = new Contact(firstName, lastName, phoneNumber, email);
  const contactListItem = createContactListItem(contact);
  contactList.appendChild(contactListItem);
  form.reset();
}

// Get form fields values
function getValue(element, e) {
  return e.target.elements[element].value;
}

function createContactListItem(contact) {
  const contactListString = `
  <div>${contact.firstName} ${contact.lastName}</div>
  <div><i class="material-icons">phone</i> ${contact.phoneNumber}</div>
  <div><i class="material-icons">email</i> ${contact.email}</div>
  <div><i class="material-icons close">close</i></div>
  `;
  const htmlObject = document.createElement('li');
  htmlObject.classList.add('collection-item');
  htmlObject.innerHTML = contactListString;
  return htmlObject;
}