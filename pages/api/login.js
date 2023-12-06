import db from "../../utils/db";
import nextConnect from "next-connect";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";

const handler = nextConnect();
import passport from "passport";
import passportSetup from "../../passport";
import cookieSession from "cookie-session";
const CLIENT_URL = "http://localhost:3000/";

handler.use(
  cookieSession({
    name: "session",
    keys: ["sohan"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

handler.use(passport.initialize());
handler.use(passport.session());

handler.get("/login/success", (req, res) => {
  console.log("success");
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

handler.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

handler.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

handler.get(passport.authenticate("google", { scope: ["profile"] }));

handler.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default handler;
