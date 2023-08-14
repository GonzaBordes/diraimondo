export const splitText = (elements) => {
    elements.forEach(paragraph => {
        const wordElements = [];
      
        Array.from(paragraph.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(" ");
            words.forEach(word => {
              const wordElement = document.createElement('span');
              wordElement.classList.add('word');
      
              // Split the word into characters
              const chars = word.split('');
              chars.forEach(char => {
                const charElement = document.createElement('span');
                charElement.classList.add('char');
                charElement.textContent = char;
                wordElement.appendChild(charElement);
              });
      
              wordElements.push(wordElement);
            });
          } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN') {
            const span = document.createElement('span');
            span.classList.add('word');
      
            if (node.classList.contains('strong')) {
              span.classList.add('strong');
            }
      
            Array.from(node.attributes).forEach(attribute => {
              span.setAttribute(attribute.name, attribute.value);
            });
      
            Array.from(node.childNodes).forEach(childNode => {
              if (childNode.nodeType === Node.TEXT_NODE) {
                const words = childNode.textContent.split(" ");
                words.forEach(word => {
                  const wordElement = document.createElement('span');
                  wordElement.classList.add('word');
      
                  // Split the word into characters
                  const chars = word.split('');
                  chars.forEach(char => {
                    const charElement = document.createElement('span');
                    charElement.classList.add('char');
                    charElement.textContent = char;
                    wordElement.appendChild(charElement);
                  });
      
                  if (node.classList.contains('strong')) {
                    wordElement.classList.add('strong');
                  }
      
                  wordElements.push(wordElement);
                });
              } else if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === 'SPAN') {
                const childSpan = document.createElement('span');
                childSpan.classList.add('word');
                
                if (childNode.classList.contains('strong')) {
                  childSpan.classList.add('strong');
                }
      
                Array.from(childNode.attributes).forEach(attribute => {
                  childSpan.setAttribute(attribute.name, attribute.value);
                });
      
                Array.from(childNode.childNodes).forEach(innerNode => {
                  if (innerNode.nodeType === Node.TEXT_NODE) {
                    const words = innerNode.textContent.split(" ");
                    words.forEach(word => {
                      const wordElement = document.createElement('span');
                      wordElement.classList.add('word');
      
                      // Split the word into characters
                      const chars = word.split('');
                      chars.forEach(char => {
                        const charElement = document.createElement('span');
                        charElement.classList.add('char');
                        charElement.textContent = char;
                        wordElement.appendChild(charElement);
                      });
      
                      if (childNode.classList.contains('strong')) {
                        wordElement.classList.add('strong');
                      }
      
                      wordElements.push(wordElement);
                    });
                  }
                });
      
                wordElements.push(childSpan);
              }
            });
          }
        });
      
        paragraph.innerHTML = '';
        wordElements.forEach(wordElement => {
          paragraph.appendChild(wordElement);
        });
      });
}