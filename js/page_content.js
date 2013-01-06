function click_apply_start()
{
    $("#apply_start").hide();
    $("#apply_end").show();
    $("#apply_list").html("<li>张三&nbsp&nbsp13912345678</li>");
    $("#apply_list").listview("refresh");
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