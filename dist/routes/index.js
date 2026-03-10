"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/contact', (req, res) => {
    res.render('contact');
});
exports.default = router;
