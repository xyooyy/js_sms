function onDeviceReady() {
}
var native_access;
var refresh_page;
var phone_number;
$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    $.mobile.page.prototype.options.addBackBtn = true;
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;

    if(window.refresh_page){
      refresh_page();
    }
    native_access = new NativeAccess();
});

var native_accessor = {
    process_received_message:function(message){
        $("#message").html(message);
        $("#dialog").click();
        save_receive_message_result_to_list(message);
    },

    send_sms:function(sucess_callback, error_callback,message){
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone_number}]}, {"message_content":message},success_callback, error_callback);
    },

    receive_message:function(message){
        if(typeof this.process_received_message === 'function'){


            this.process_received_message(message);

        }
    }

}

function notify_message_received(message_json){
    //alert(message_json);
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    native_accessor.receive_message(message_json.messages[0].message);
    phone_number=message_json.messages[0].phone;
}