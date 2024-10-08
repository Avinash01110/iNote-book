export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password, confirmPassword) => {
  if (password != confirmPassword) {
    return false;
  } else {
    return true;
  }
};

export const getInitials = (name) => {
  if(!name){
    return "";
  }

  const words = name.split(" ");

  let initials = "";

  for(let i = 0 ; i < Math.min(words.length, 2); i++){
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

