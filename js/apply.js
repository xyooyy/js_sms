

var end_apply = false;


function add_partner_from (activity_name_of_input,messages_json)
{
    if (end_apply) return;
    add_apply_phone(activity_name_of_input,messages_json.messages[0].phone, messages_json.messages[0].message) ;

    return;
}

function finish_apply()
{
    end_apply = true;
    display_price_list();
}
function add_apply_phone (name,phone_number, message_content)
{
    //name +="apply";
    create_activity_name(name);
    add_storage_info(activity_name, {"content":message_content, "phone":phone_number});
    return;
}
function have_apply (phone_number)
{
    return search_info("apply","phone",phone_number);
}


function each_apply_name (fn)
{
    each_contact(activity_name, fn);
}
