//function to check if user is logged in

export const validateUser = () => {
  const jwtToken = localStorage.getItem('jwtToken');

  if (!jwtToken) {
    return false;
  }
  return true;
};
