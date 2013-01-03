

var end_apply = false;



function add_partner_from (messages_json)
{
    if (end_apply) return;
    add_apply_phone(messages_json.messages[0].phone, messages_json.messages[0].message)
    return;
}

function end_apply()
{
    end_apply = true;
}




function add_apply_phone (phone_number, message_content)
{

    if (message_content == "bm")
    {
        add_storage_info("apply", {"content":"applied", "phone":phone_number});
    }
    return;
}




function have_apply (phone_number)
{
    return search_info("apply","phone",phone_number);
}


