SharrrePlatform.register("email", function (options) {
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
		trackingAction: {site: 'email', action: 'share'},
		load: function (self) {
			// noop
		},
		tracking: function () {
			function share() {
				_gaq.push(['_trackSocial', 'email', 'share']);
			}
		},
		popup: function (opt) {
			location.href = "mailto:?subject="+ encodeURIComponent(document.title);
		}
	}
});
