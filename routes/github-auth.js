const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_URL = "https://shm-portgen.herokuapp.com/";

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/auth/login/failed",
    })
);

module.exports = router;
