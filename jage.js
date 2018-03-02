jQuery("#wcms > form > div > table > tbody > tr > td._writer_area.writer").each(function (i, e) {
    e = jQuery(e);
    var chadan;
    jQuery.ajax({
        url: "https://rawgit.com/Lee-Mi-Reu/fd/master/chadan.json",
        success: function (data) {
            data = JSON.parse(data);
            data.forEach(function (v) {
                if (!e.text().indexOf(v)) {
                    e.parentsUntil('.tr')[0].remove();
                }
            });
        }
    })
});
