var process_message = function(message) {
    $("#message").html(message);
    $("#dialog").get(0).click();
    save_receive_message_result_to_list(message);
}
