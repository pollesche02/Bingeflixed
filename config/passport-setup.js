// Dependencies
// =============================================================
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./keys');

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID:keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect',
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function working')
        console.log(profile)
    })
);