jQuery(document).ready(function() {
    jQuery(document.body).on("click", ".et_pb_modal_button", function (e) {
        var target = jQuery(this).siblings(".white-popup");
        jQuery.magnificPopup.open({
            items: {
                src: target,
                type: "inline",
                midClick: true,
            },
            preloader: false,
        });
    });
});