const { getUserByIpnPassport } = require("../repository/users");

module.exports = {
  isUserExist(req, res, next) {
    const { ipn, passport } = req.body;
    getUserByIpnPassport(ipn, passport).then((data) => {
      if (!data) {
        next();
        return;
      }
      res.status(400).json({ message: "Ipn or passport not unique" });
    });
  },
};
