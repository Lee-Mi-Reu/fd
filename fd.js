function sex() {
    var given = jQuery("img[src*='11011001_73']");
    given.prop("src", "https://i.imgur.com/aZ9RCCw.png");
    given.parent().parent().siblings(".name_area").find(".name").text("셰이 기븐");
}
setTimeout(function () {
    sex();
    jQuery(".naver_sports")
    .after(jQuery("<img>").prop({width: 30, src: "https://i.imgur.com/OwpYc3T.png"}).addClass("mir-god"))
    .remove();
}, 1000);
jQuery("#gnb").on("click", ".mir-god", sex);