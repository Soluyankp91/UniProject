const nodemailer = require("nodemailer");
const Mustache = require("mustache");
const fs = require("fs");
const path = require('path')

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "alexander.soluyan@gmail.com",
    pass: "456jkl89",
  },
});

module.exports = {
  sendEmail(userEmail, subject, responseData) {
    let renderedHtml = Mustache.render(
      fs.readFileSync(path.join(__dirname, 'template/email.template.mustache')).toString(),
      {
        login: responseData.id,
      }
    );
    let emailOptions = {
      from: "alexander.soluyan@gmail.com",
      to: userEmail,
      subject: subject,
      html: renderedHtml,
    };
    transporter.sendMail(emailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
