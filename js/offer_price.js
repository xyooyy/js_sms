/**
 * Created with JetBrains RubyMine.
 * User: xyooyy
 * Date: 13-1-2
 * Time: 下午10:50
 * To change this template use File | Settings | File Templates.
 */
var bid_times = 1;

function begin_bid()
{
    bid_times++;
    return;
}

function is_price (str)
{
    if (str != null)
    {
        return str.match(/([1-9][0-9]{2,100}|[0-9]{1})(\.\d{1,2})?/g) == str ? true : false;
    }
    return false;
}



function add_offer_price(phone_number, message_content)
{
    if (!have_apply(phone_number)) return;
    if (!is_price(message_content)) return;

    add_storage_info("bid"+bid_times, {"price":message_content, "phone":phone_number}) ;
    return;
}


function get_bid_diff (times)
{
    var bid_diff = {};

    each_contact("bid"+times, function (contacts, index, contact) {
        if ( bid_diff[contact["price"]] == null)
        {
            bid_diff[contact["price"]] = [];
            bid_diff[contact["price"]].phone =  contact["phone"];
            bid_diff[contact["price"]].price = contact["price"];
            bid_diff[contact["price"]].same_count =  0;
            //alert(contact["phone"]);
        }
        else
        {
            bid_diff[contact["price"]].same_count++;
        }
    });

    return bid_diff;
}

function bid_diff_sort (diff)
{
    var i = 0;
    var result = new Array;
    $.each(diff, function (index, contact){
        if (contact["same_count"] == 0 )
        {
            result[i] =  contact["price"];
            i++;
            return true;
        }
    })

    return result.sort();
}
function handle_current_bid_result(fn)
{
    alert("begin");
    var diff = get_bid_diff(bid_times);
    var result =  bid_diff_sort(diff);

    $.each(result, function (index, contact){
      if (fn != null) fn(diff[contact].phone, diff[contact].price);

    });
    return ;
}

