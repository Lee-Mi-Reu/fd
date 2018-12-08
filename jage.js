jQuery.ajax({
    url: "https://cdn.jsdelivr.net/gh/Lee-Mi-Reu/fd/chadan.json",
    dataType: "JSON",
    success: function (data) {
        data.forEach(function (v) {
            jQuery("td._writer_area.writer:contains("+v+")").each(function (i, e) {
                jQuery(e).parentsUntil('.tr')[0].remove();
            });
        });
    }
});
