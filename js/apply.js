

var end_apply = false;



function add_partner_from (messages_json)
{
    if (end_apply) return;
    add_apply_phone(messages_json.messages[0].phone, messages_json.messages[0].message)
    return;
}

function finish_apply()
{
    end_apply = true;
    display_price_list();
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


function list_price()
{
    var list = '';
    list+= '<h1 class="ui-title"></h1><a data-theme="a" class="ui-btn-left ui-btn ui-shadow ui-btn-corner-all ui-btn-up-a"><span>开始竞价</span></a><a data-theme="a">结束竞价</a>';
    return list;
}
function display_price_list()
{
    //alert(list_price());
    var a = "<div data-role='header' ><h1></h1><a data-theme='a'>开始竞价</a><a data-theme='a'>结束竞价</a></div>";
    $("#content").html(a);
    try{
        $("#content").trigger("create");
    }catch(e){}

}