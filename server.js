const express = require('express');
const app = express();
const passportSetup = require('./passport');
const passport = require('passport');
const port = process.env.PORT || 5000;
app.use(passport.initialize());
app.use(passport.session());
// const cookieParser = require('cookie-parser')

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/auth", passport.authenticate('gitlab'));


app.get("/auth/gitlab",passport.authenticate('gitlab'), (req, res) => {

    res.redirect("http://localhost:3000/home");
    // res.cookie("OAuth",res.req.test)
    // res.redirect('http://localhost:3000/home')
    // res.json({response:req.query.code});
})

app.get("/deploy", (req, res) => {
    res.send("deploy a new app");
})

app.get("/apps", (req, res) => {
    res.send("view all existing apps")
})