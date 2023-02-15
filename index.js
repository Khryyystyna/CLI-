
const contacts = require('./contacts');

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
          const listAll = await contacts.listContacts();
          return console.log(listAll);
      
    case "get":
          const oneContact = await contacts.getContactById(id);
          return console.log(oneContact);

    case "add":
          const add = await contacts.addContact(name, email, phone);
          return console.log(add);

    case "remove":
          const remove = await contacts.removeContact(id);
          return console.log(remove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);




