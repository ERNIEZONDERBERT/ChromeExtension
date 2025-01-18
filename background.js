try {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
        console.log(tab.url);
            if (tab.url.includes('https://bsky.app/') && !tab.url.includes('profile')) {
                console.log('Deleting banner');
                chrome.scripting.executeScript({
                    target: {tabId: tabId},
                    files: ['deleteBanner.js']
                });
            }
            else if (tab.url.includes('https://bsky.app/profile')) {
                let handle = tab.url.toString().replace('https://bsky.app/profile/', '');
                handle = handle.split('/')[0];
                console.log(handle);
                fetch('http://127.0.0.1:5000/botcheck/' + handle)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if (data.is_bot) {
                            console.log('Bot detected');
                            chrome.scripting.executeScript({
                                target: {tabId: tabId},
                                files: ['content.js']
                            });
                        }
                    })
                    .catch(error => console.error('Error:', error));
            }

        }
    });
} catch (e) {
    console.log(e)
}