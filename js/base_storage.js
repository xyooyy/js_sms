
function each_contact (item_name, fn) {
    var contacts_item = get_storage(item_name);
    var contacts = contacts_item[item_name];
    $.each(contacts, function (index, contact) {
        if (fn(contacts, index, contact) == false) {
            return false;
        }
    });
    //localStorage.setItem("contacts", JSON.stringify(contacts_item));
};

function get_storage (storage_name)
{
    var init_value = {};
    init_value[storage_name] = [];
    return localStorage.getItem(storage_name) == undefined ? init_value : JSON.parse(localStorage.getItem(storage_name));

}
function add_storage_info (storage_name, contact)
{
    var contacts_item = get_storage(storage_name);
    contacts_item[storage_name].push(contact);
    localStorage.setItem(storage_name, JSON.stringify(contacts_item));
}

function search_info (storage_name, key, content)
{
    var result = false;
    each_contact(storage_name, function (contacts, index, contact) {
        if (contact[key] === content) {
            result = true;
            return false;
        }
    });
    return result;
}