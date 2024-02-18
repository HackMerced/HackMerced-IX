/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const nodemailer = require("nodemailer");
const {logger} = require("firebase-functions/logger");

// const appEmail = process.env.REACT_APP_EMAIL;
// const appPassword = process.env.REACT_APP_PASSWORD;
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: appEmail,
//       pass: appPassword,
//     },
//   });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hackmercedquerysender@gmail.com",
    pass: "HACKMERCED_query_sender!123",
  },
});

exports.sendEmailOnInquiry = functions.firestore
    .document("contacts/{inquiryId}")
    .onCreate((snapshot, context) => {
      const inquiryData = snapshot.data();

      const mailOptions = {
        from: "hackmercedquerysender@gmail.com",
        to: "porfirio@hackmerced.com",
        subject: "New Contact Us Inquiry",
        text: `
                Name: ${inquiryData.fullName}
                Email: ${inquiryData.email}
                Message: ${inquiryData.message}
            `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Failed to send email", error);
          logger.error("Failed to send email", error);
          return;
        }
        console.log("Email sent: " + info.response);
        logger.log(`Email sent: ${info.response}`);
      });
    });
