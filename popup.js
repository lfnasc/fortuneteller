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
  // getElementById('chat').innerHTML += `<p> ${text} </p>`;
  getElementById('chat').insertAdjacentHTML('afterbegin', `<p> ${text} </p>`);
};

const setClickSendButton = () => {
  getElementById('sendButton').addEventListener('click', () => {
    const question = getElementById('textMessage').value;
    sendMessageWithOptions('CHAT', question, (response) => {
      const answer = response.answer;
      renderMessage(`Ft: ${answer}`);
      renderMessage(`Eu: ${question}`);
    });
  });
};

// callback to start script
document.addEventListener('DOMContentLoaded', () => setClickSendButton());
