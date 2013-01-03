function MockedNativeContacts() {

}

MockedNativeContacts.prototype.all_addresses = function (success_callback, error_callback, context) {
    success_callback.call(context, []);
};
