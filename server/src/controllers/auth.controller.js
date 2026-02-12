import * as authService from "../services/auth.service.js";

export const register = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await authService.loginUser(req.body);

    return res.status(200).json({
      message: "User LoggedIn Successfully",
      ...data,
    });

  } catch (error) {
    next(error);
  }
};
