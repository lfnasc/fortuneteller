console.log('Content scripts is running...');

// general functions
const createTextNode = text => (document.createTextNode(text));

const createElement = tag => (document.createElement(tag));

const getGoogleBody = () => (document.body);

const getElementById = id => (document.getElementById(id));

// business functions
const createWarningFortuneTeller = () => {
  const warningFortuneTeller = createElement('div');
  warningFortuneTeller.setAttribute('id', 'ftcs--warning');
  warningFortuneTeller.className = 'ftcs--warning';
  const logo = createElement('IMG');
  logo.setAttribute('id', 'ftcs--logo');
  logo.className = 'ftcs--logo';
  const message = createElement('p');
  message.className = 'ftcs--text';
  const textNode = createTextNode('Já falou com o Fortune Teller hoje?');
  message.appendChild(textNode);
  warningFortuneTeller.appendChild(logo);
  warningFortuneTeller.appendChild(message);
  return warningFortuneTeller;
};

// injecting warning into Google pages
getGoogleBody().appendChild(createWarningFortuneTeller());
// updated src here because this image not existis in original page context
getElementById('ftcs--logo').src = chrome.extension.getURL('icon32.png');
