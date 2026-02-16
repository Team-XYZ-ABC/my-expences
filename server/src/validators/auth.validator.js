export const validateRegister = ({ name, email, password }) => {

  if (!name || !email || !password) {
    throw new Error("Provide all required fields");
  }

  if (name.trim().length < 3) {
    throw new Error("Name must be at least 3 characters");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Enter valid email");
  }

  if (password.trim().length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }
};

export const validateLogin = ({ email, password }) => {

  if (!email || !password) {
    throw new Error("Email & Password required");
  }
};
