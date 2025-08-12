/*-----------------------------------------------------------------------------------
 /* Styles Switcher
 -----------------------------------------------------------------------------------*/

window.console = window.console || (function() {
	var c = {};
	c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {
	};
	return c;
})();

jQuery(document).ready(function($) {
	
	var colors = '';

    //color palatte:
	$(document).on('click', '.tm-color-switcher img', function(el) {
		$('.tm-color-switcher').removeClass('closed');
	});

	$('.tm-color-switcher').on('click', '.close', function(el) {
		$('.tm-color-switcher').addClass('closed');
	});

	$('.tm-color-selector').each(function(i, el) {
		var field = $(el).data('field'),
			bodyStyles = window.getComputedStyle(document.body),
			color = $.trim(bodyStyles.getPropertyValue('--' + field)),
			elId = $(el).attr('id'),
			valId = elId + '-' + 'val';

		$('#' + elId).ColorPicker({
			color: color,
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				bodyStyles = window.getComputedStyle(document.body);
				$('#' + valId).css('background-color', '#' + hex);
				document.documentElement.style.setProperty('--' + field, '#' + hex, 'important');
			}	
		});
	});

    setTimeout(
        function() {
                $('.tm-color-switcher').fadeIn();
        }, 2000
    );
});
