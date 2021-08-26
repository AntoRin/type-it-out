const { Router } = require("express");

const router = Router();

router.get("/personal/secret/ms/bot/webhook", (req, res) => {
   console.log(req.body);
});

router.get("/personal/secret/ms/drive/webhook", (req, res) => {
   const { validationToken } = req.query;
   const decodedToken = decodeURIComponent(validationToken);
   console.log(req.body);
   res.send(decodedToken);
});

module.exports = { webHookRouter: router };
