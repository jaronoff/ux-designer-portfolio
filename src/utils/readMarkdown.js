// src/utils/readMarkdown.js
export const readFile = (filename) => {
    return fetch(`/markdown/${filename}`)
      .then((response) => response.text())
      .catch((error) => console.error('Fetching markdown failed', error));
  };
  