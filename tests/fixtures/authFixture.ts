export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMesage: null,
};

export const autenticadedState = {
  status: "authenticated",
  uid: "123",
  email: "demo@gmail.com",
  photoURL: "https://demo.jpg",
  displayName: "Demo",
  errorMesage: null,
};

export const notAutenticadedState = {
  status: "notAuthenticated",
  uid: null,
  email: null,
  photoURL: null,
  displayName: null,
  errorMesage: null,
};
export const demoUser = {
  uid: "123",
  email: "demo@gmail.com",
  displayName: "Demo User",
  photoURL: "https://demo.jpg",
};
