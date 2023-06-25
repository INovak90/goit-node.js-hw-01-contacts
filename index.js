// // index.js
const contacts = require("./contacts/contacts");
const { program } = require("commander");

// // TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const getAllContacts = await contacts.listContacts();
      console.log(getAllContacts);
      break;

    case "get":
      // ... id
      const getContactById = await contacts.getContactById(id);
      console.log(getContactById);
      break;

    case "add":
      // ... name email phone
      const addNewContact = await contacts.addContact( name, email, phone);
      console.log(addNewContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action, <action>", "Action to invoke")
  .option("-i, --id, <id>", "Contact id")
  .option("-n, --name, <name>", "Contact name")
  .option("-e, --email, <email>", "Contact email")
  .option("-p, --phone, <phone>", "Contact phone");

program.parse();
const options = program.opts();
invokeAction(options);
