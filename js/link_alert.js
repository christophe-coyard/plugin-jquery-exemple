(function($) {
	$.fn.link_alert=function(params) {
		return this.each(function() {

			var link = $(this);

			link.click(function(e) {
				alert(link.attr('href'));
			});

		});
	};
})(jQuery);	