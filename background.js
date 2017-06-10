console.log('Background is running...');

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === 'CHAT') {
    const question = request.options;
    const codeResponse = Math.floor(Math.random() * 3);
    let answer = '';

    if (question.trim().endsWith('?')) {
      switch (codeResponse) {
        case 0:
          answer = 'Sim, com toda certeza!';
          break;
        case 1:
          answer = 'Não, claro que não!';
          break;
        case 2:
          answer = 'Talvez... não tenho certeza...';
          break;
        default:
          answer = 'Não entendi a pergunta, pode repetir?';
      }
    } else {
      answer = 'Desculpe, perguntas devem terminar com "?"';
    }
    sendResponse({ answer });
  }
});
