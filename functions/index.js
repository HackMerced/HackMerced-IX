/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const {info, debug} = require("firebase-functions/logger");
admin.initializeApp();

const sendGridAPI = "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";
sgMail.setApiKey(sendGridAPI);


exports.sendInquiryEmail = functions.firestore
    .document("contacts/{docId}")
    .onCreate((snap, context) => {
      const newValue = snap.data();
      const email = newValue.email;
      const fullName = newValue.fullName;
      const message = newValue.message;

      const msg = {
        to: "porfirio@hackmerced.com",
        from: "hackmercedquerysender@gmail.com",
        subject: "New Contact Inquiry from HackMerced Website",
        text: `You have a new inquiry from ${fullName} (${email}): ${message}`,
        html: `<strong>You have a new inquiry from ${fullName} (${email}):</strong> ${message}`,
      };

      return sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
            info("Email sent", {structuredData: true});
          })
          .catch((error) => {
            console.error("Error sending email", error);
            if (error.response) {
              console.error(error.response.body);
            }
            debug(error, {structuredData: true});
          });
    });


