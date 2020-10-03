chrome.webRequest.onBeforeRequest.addListener(
	function(details){return { cancel: true }},
	{ urls: ["*://*.code.whitehatjr.com/*","*://*.mgmotor.co.in/*","*://*.zedo.com/*", "*://*.google.com/pagead/*", "*://*.google.com/aclk*","*://*.google.co.in/pagead/*", "*://*.youtube.com/pagead/*","*://*.youtube.com/api/stats/ads*", "*://*.codr.toppr.com/*", "*://*.wizklub.com/*"]},
	["blocking"]
)
//append the list in line 3 to block more sites
//eg:-
// "*://*.xyz.com/*"
