import UserAuth from "../models/auth.model.js";
import userProfile from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/hash.util.js";
import { generateToken } from "../utils/token.util.js";
import { validateRegister, validateLogin } from "../validators/auth.validator.js";

export const registerUser = async ({ name, email, password }) => {

  validateRegister({ name, email, password });

  email = email.toLowerCase();

  const existingUser = await UserAuth.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await UserAuth.create({
    email,
    password: hashedPassword,
  });

  const profile = await userProfile.create({
    userId: newUser._id,
    name,
  });

  return {
    id: newUser._id,
    name: profile.name,
    email: newUser.email,
  };
};


export const loginUser = async ({ email, password }) => {

  validateLogin({ email, password });

  const existingUser = await UserAuth
    .findOne({ email })
    .select("+password");

  if (!existingUser) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, existingUser.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(existingUser._id);

  return { token };
};
