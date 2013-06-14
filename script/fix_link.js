
function chkfixurl(tabId, changeInfo, tab) {
	
	//跳转地址
	if (tab.url=="chrome-extension://bfpafjgbeaafloinkjifblnjgelpkgpf/?q=%E5%89%A5%E7%BA%BF%E9%92%B3"){
		chrome.tabs.update(tabId,{url: "http://www.baidu.com"})
		//显示图标
		show_icon(tabID);
	}

};

//显示icon图标
function show_icon(tabID){
	//通常性的全显示
	chrome.pageAction.show(tabId);
}

chrome.tabs.onUpdated.addListener(chkfixurl);
