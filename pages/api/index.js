// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");
import nc from "next-connect";
require("dotenv").config({ path: ".env" });

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us12",
});

async function mailchimpSignup(email) {
  const response = await mailchimp.lists.addListMember(
    process.env.MAILCHIMP_LIST_ID,
    {
      email_address: email,
      status: "pending",
    }
  );
  return response;
}

const handler = nc().post(async (req, res) => {
  const userEmail = req.query.email;
  if (userEmail === "")
    res.json({
      code: 400,
      message: "error when trying to sign up new customer: Email Empty",
    });
  try {
    await mailchimpSignup(userEmail);
    res.json({ code: 200, message: "Successfully added user to email list" });
  } catch (err) {
    console.log(err);
    res.json({
      code: err.status,
      message: "error when trying to sign up new customer",
      error: err,
    });
  }
});

export default handler;
