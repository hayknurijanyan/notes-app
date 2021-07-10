export const signIn = (data) => {
  return {
    type: "SIGN_IN",
    payload: data,
  };
};

export const signOut = (data) => {
  return {
    type: "SIGN_OUT",
    payload: data,
  };
};
