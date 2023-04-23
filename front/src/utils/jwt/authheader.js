export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return { Authorization: 'Bearer ' + user};
    } else {
      return {};
    }
  }

  /* function isTokenExpired(token) {
  const decodedToken = jwt.decode(token, { complete: true });
  const currentDate = new Date().getTime() / 1000;
  if (decodedToken.payload.exp < currentDate) {
    return true;
  }
  return false;
} */