chrome.webRequest.onBeforeRequest.addListener(
	function(details){return { cancel: true }},
	{ urls: ["*://*.code.whitehatjr.com/*","*://*.zedo.com/*", "*://*.google.com/pagead/*", "*://*.google.com/aclk*","*://*.google.co.in/pagead/*", "*://*.youtube.com/pagead/*","*://*.youtube.com/api/stats/ads*", "*://*.codr.toppr.com/*", "*://*.wizklub.com/*"]},
	["blocking"]
)