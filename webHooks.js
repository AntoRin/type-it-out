const { Router } = require("express");

const router = Router();

router.get("/personal/secret/ms/bot/webhook", (req, res) => {
   console.log(req.body);
});

router.get("/personal/secret/ms/drive/webhook", (req, res) => {
   console.log(req.body);
   res.status(200).end();
});

module.exports = { webHookRouter: router };
