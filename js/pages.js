var success_callback = function()
{
   alert("回复发送成功！")
}
var error_callback = function()
{
    alert("回复发送失败！");
}

function process_send_sms(callBack)
{
    var _native_accessor = native_accessor;
    _native_accessor.send_sms(success_callback,error_callback,callBack);
    window.localStorage.callBack += callBack + '*';
    write_in_table();
}
function save_receive_message_result_to_list(message)
{
    window.localStorage.messasgeList += message + '*';
}
function write_in_table ()
{
    var massages = new Array();
    var callBacks = new Array();
    var str = '<li data-theme="b" class="ui-li ui-li-static ui-btn-up-b">报名信息</li>';
    massages = window.localStorage.messasgeList.split('*');
    callBacks = window.localStorage.callBack.split('*');
    for(i=0;i < massages.length-1;i++)
    {
        str += "<li class='ui-li ui-li-static ui-btn-up-c'><h4 class='ui-li-heading'>" +massages[i]+"</h4><p class='ui-li-desc' style='color:#1e90ff;'>回复内容:" +callBacks[i]+ "</p></li>";
    }
    $("#saveSms_callBack").html(str);
}
$(document).ready(function(){
     if(!window.localStorage.callBack)
     {
         window.localStorage.callBack = "";
     }
     if(!window.localStorage.messasgeList)
     {
         window.localStorage.messasgeList = "";
     }
     write_in_table();
});
