import User from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    if (!firstname || !lastname || !email || !password) {
      const err = new Error("a relevant field is missing");
      err.status = 400;
      return next(err);
    }

    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
