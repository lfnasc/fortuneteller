console.log('Popup is running...');

// general functions
const getElementById = id => (document.getElementById(id));

const sendMessageWithOptions = (greeting, options, callback) => {
  chrome.extension.sendMessage(
    {
      greeting,
      options
    },
    callback
  );
};

// business functions
const renderMessage = text => {
  getElementById('chat').innerHTML += `<p> ${text} </p>`;
};

const setClickSendButton = () => {
  getElementById('sendButton').addEventListener('click', () => {
    const chat = getElementById('textMessage').value;
    renderMessage(`Eu: ${chat}`);
    sendMessageWithOptions('CHAT', chat, () => {
      // treatment to response
    });
  });
};

// callback to start script
document.addEventListener('DOMContentLoaded', () => setClickSendButton());
