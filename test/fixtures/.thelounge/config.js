"use strict";

var config = require("../../../defaults/config.js");

config.defaults.name = "Example IRC Server";
config.defaults.host = "irc.example.com";
config.public = true;
config.prefetch = true;
config.host = config.bind = "127.0.0.1";
config.port = 61337;
config.transports = ["websocket"];

module.exports = config;
