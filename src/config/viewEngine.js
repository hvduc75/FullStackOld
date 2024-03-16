import express from 'express';

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //jsp, blade co the dung dc for if trong file html
    app.set("views", "./src/views")
};

module.exports = configViewEngine;
