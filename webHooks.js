const { Router } = require("express");

const router = Router();

router.get("/personal/secret/ms/bot/webhook", (req, res) => {
   console.log(req.body);
});

router.get("/personal/secret/ms/drive/webhook", (req, res) => {
   console.log(req.body);
});

module.exports = { webHookRouter: router };
