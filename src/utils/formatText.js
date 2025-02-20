function formatText(text) {
  if (!text) return;
  if (text === '') return;
  if (text.trim() === '') return;

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export default formatText;