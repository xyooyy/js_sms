//current_activity_name
var activity_name;

function is_activity_exist(name)
{
    return search_name(name);;
}

var count = 1;
function create_activity_name(name)
{
    is_activity_exist_data =  is_activity_exist(name);
    if(is_activity_exist_data)
    {
        name +=count++ ;
        create_activity_name(name);
    }
    else
    {
        add_storage_info("all_activity_name",name);
        activity_name = name;
    }
    return ;
}

function set_activity_name(name)
{
    add_storage_info("all_activity_name",name);
    current_activity_name = name;
}

//刘表
function each_activity (fn)
{
    each_contact ("all_activity_name", fn);
}