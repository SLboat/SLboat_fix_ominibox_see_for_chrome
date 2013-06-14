//扩展id
var extension_id = "bahmaphgocmfpmlkpmcimhgbpdjkjdlo";
//替换的目标地址，里面的%s代替原始搜索内容
var replace_url = "http://see.sl088.com/w/index.php?search=%s&title=%E7%89%B9%E6%AE%8A%3A%E6%90%9C%E7%B4%A2";

//最终替换规则
var replace_patern = new RegExp("chrome-extension:\/\/" + extension_id + "\/\\?q=(.+)");

function chkfixurl(tabId, changeInfo, tab) {

	//跳转地址
	if (tab.url.match(replace_patern)) {
		// 修理后的url
		var fix_url = replace_url.replace("%s", tab.url.match(replace_patern)[1]);

		chrome.tabs.update(tabId, {
			url: fix_url //修理url
		})
		//显示图标
		show_icon(tabId);
	}

};

//显示icon图标
function show_icon(tabId) {
	chrome.pageAction.show(tabId);
}

chrome.tabs.onUpdated.addListener(chkfixurl);