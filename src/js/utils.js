export const transformText = (text) => {
  text = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
  return text;
}
export const saveInLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value))
}
