export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('aera') || '[]');
}

export const setLocalStorage = (data) => {
  console.log(data, 'SET STORE');
  return localStorage.setItem('aera', JSON.stringify(data));
}