const authService = require("../../../../lib/auth");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const accessToken = await authService.login({ email, password });

    const response = {
      code: 200,
      message: "Login successful",
      data: {
        access_token: accessToken,
      },
      links: {
        self: req.url,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = login;
