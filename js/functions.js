function updateSync(sync, unsync) {
    $("#btn-synced").text("已同步(" + sync + ")");
    $("#btn-unsynced").text("未同步(" + unsync + ")");
}


function submit() {
    if($(".app").children().hasClass("changed"))
        $("#submit").show();
    else 
        $("#submit").hide();
}
