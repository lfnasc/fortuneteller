console.log('Background is running...');

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === 'CHAT') {
    console.log('Background received this question: ', request.options);
  }
});
