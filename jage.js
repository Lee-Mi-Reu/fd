var chadan = ['hyunmin']
jQuery("#wcms > form > div > table > tbody > tr > td._writer_area.writer").each(function (i, e) {
    e = jQuery(e);
    chadan.forEach(function (v) {
        if (!e.text().indexOf(v)) {
            e.parentsUntil('.tr')[0].remove();
        }
    })
});
console.log(jQuery("#wcms > form > div > table > tbody > tr > td._writer_area.writer").length);
