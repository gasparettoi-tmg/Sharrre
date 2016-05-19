SharrrePlatform.register("whatsapp", function (options) {
	defaultSettings = {
		url: '',  //if you need to personalize url button
		urlCount: false,  //if you want to use personnalize button url on global counter
		counter: '',
		count: true,
		popup: {}
	};

	defaultSettings = $.extend(true, {}, defaultSettings, options);
	return {
		settings: defaultSettings,
		trackingAction: {site: 'whatsapp', action: 'share'},
		url: function (test) {
        },
		load: function (self) {
		},
		tracking: function () {
			function share() {
				_gaq.push(['_trackSocial', 'whatsapp', 'share']);
			}
		},
		// ONCLICK
		popup: function (opt) {
			window.open("whatsapp://send?text=" + encodeURIComponent(document.title));
		}
	}
});