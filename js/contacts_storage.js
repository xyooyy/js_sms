function ContactsLocalStorage() {

}

ContactsLocalStorage.prototype.each_contact = function (fn) {
    var contacts_item = localStorage.getItem("contacts") == undefined ? {"contacts":[]} : JSON.parse(localStorage.getItem("contacts"));
    var contacts = contacts_item["contacts"];
    $.each(contacts, function (index, contact) {
        if (fn(contacts, index, contact) === false) {
            return false;
        }
    });
    localStorage.setItem("contacts", JSON.stringify(contacts_item));
};

ContactsLocalStorage.prototype.update_contact = function (name, phone) {
    this.each_contact(function (contacts, index, contact) {
        if (contact["name"] === name) {
            contact["phone"] = phone;
            return false;
        }
    });
}

ContactsLocalStorage.prototype.delete_contact = function (name, phone) {
    this.each_contact(function (contacts, index, contact) {
        if (contact["name"] === name && contact["phone"] === phone) {
            contacts.splice(index, 1);
            return false;
        }
    });
};

ContactsLocalStorage.prototype.contain_contact = function (phone) {
    var result = false;
    this.each_contact(function (contacts, index, contact) {
        if (contact["phone"] === phone) {
            result = true;
            return false;
        }
    });
    return result;
};

ContactsLocalStorage.prototype.query_contacts = function () {
    var default_data = {};
    default_data["contacts"] = [];
    var saved_item = localStorage.getItem("contacts");
    if (typeof saved_item === 'undefined' || saved_item === null) {
        return JSON.stringify(default_data);
    }
    return saved_item;
};

ContactsLocalStorage.prototype.save_contact = function (contact_name, contact_phone) {
    var contacts_item = localStorage.getItem("contacts") == undefined ? {"contacts":[]} : JSON.parse(localStorage.getItem("contacts"));
    contacts_item["contacts"].push({"name":contact_name, "phone":contact_phone});
    localStorage.setItem("contacts", JSON.stringify(contacts_item));
};