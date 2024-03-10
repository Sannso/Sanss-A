export const IMAGE = () => {
    if (Math.floor(Math.random() * 2) == 0) {
      return 'url("images/0.webp")';
    } else {
      return 'url("images/1.webp")';
    }
  };

