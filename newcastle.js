function sex() {
    var given = jQuery("img[src*='11011001_73']");
    given.prop("src", "https://i.imgur.com/aZ9RCCw.png");
    var grandFather = given.parent().parent();
    grandFather.siblings(".name_area").find(".name").text("셰이 기븐");
    grandFather.siblings(".plr_btn").find(".plr_more").on('click', function () {
        setTimeout(function () {
            jQuery(".plr_name_big").text("셰이 기븐");
            jQuery(".plr_pic > img").prop("src", "https://i.imgur.com/o9rOKUf.png");
        }, 1000);
    });

    var tiote = jQuery("img[src*='11014013_73']");
    tiote.prop("src", "https://i.imgur.com/y242Mvo.png");
    tiote.parent().parent().siblings(".name_area").find(".name").text("셰이크 티오테");
    var rafa = '<div class="card shadow ace  ui-draggable ui-droppable cvr_up2" style="left: 88px; top: 269px; display: block; transition-property: left, top; transition-duration: 0.25s; transition-timing-function: ease-out;">            <div class="crd_sec lg1 ace">                <div class="photo">                    <span class="player" style="background:url(http://images.fd.toastoven.net/pc/img_g/data/club_license/card_110_73_3.png);"><img src="https://i.imgur.com/hEJxcf4.png" alt="" width="73" height="57"></span><span style="background-image: url(https://i.imgur.com/CQoe5he.png);" class="position"></span>                   <span class="level lv10_ace"><span class="blind">level</span></span>                                        <span class="flag "><img src="http://images.fd.toastoven.net/pc/img_g/data/flag/002_20.png" width="20" height="13" alt=""></span>                    <span class="item_t" data-injurycnt="0"><span class="blind">컨디션</span></span>                    <span class="up num10">potential</span>                    <div class="_poten_img" style="width : 73px;height:57px; overflow: hidden;position: absolute; z-index: 2"><div style="left: 0px; top: 0px; width: 73px; height: 57px; background: url(&quot;http://images.fd.toastoven.net/pc/img_g/ani_small.png&quot;) 0px center; opacity: 1;"></div></div><div class="bg_rainbow _rainbowEffectDiv"><img class="move_rainbow" style="animation-iteration-count: infinite; animation-timing-function: linear; animation-name: rotate0; animation-duration: 2s;"></div>                                                                            </div>                <div class="name_area">                    <div class="name">라파 베니테즈</div>                    <div class="point"><span style="width:100%;"></span></div>                </div>                                <span class="plr_btn" style="display: none;"><a href="#" class="plr_more">더보기</a></span>            </div>		</div>';
    jQuery("dl.dl_lninfo > dd.plr").append(rafa);
    var update_2;
}
setTimeout(function () {
    sex();
    jQuery(".naver_sports")
    .after(jQuery("<img>").prop({width: 30, src: "https://i.imgur.com/OwpYc3T.png"}).addClass("mir-god"))
    .remove();
}, 1000);
jQuery("#gnb").on("click", ".mir-god", sex);
