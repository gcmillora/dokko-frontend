//function to check if user is logged in

export const validateUser = () => {
  const jwtToken = localStorage.getItem('jwtToken');
  console.log(jwtToken);
  if (!jwtToken) {
    return false;
  }
  return true;
};
