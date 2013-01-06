function click_apply_start()
{
    $("#apply_start").hide();
    $("#apply_end").show();

}

function get_new_activity_name()
{
    var new_activity_name=$("#activity_name").val();
    return new_activity_name;
}

var new_name_li = '';
function new_activity_in_activity_page(activity_name)
{
    new_name_li += '<li><a onclick="go_to_apply_page()">'+activity_name+'</a></li>';
    $("#activity_list").html(new_name_li);
    $("#activity_list").listview("refresh");
}

var new_person = '';
function new_person_in_apply_page(person,phone_num)
{
    new_person += '<li>'+person+'&nbsp&nbsp'+phone_num+'</li>';
    $("#apply_list").html(new_person);
    $("#apply_list").listview("refresh");
}

var new_bit = '';
function new_bit_in_bit_page(bit_name)
{
    new_bit += '<li><a onclick="go_to_bid_start_page()">'+bit_name+'</a> </li>';
    $("#bit_list").html(new_bit);
    $("#bit_list").listview("refresh");
}