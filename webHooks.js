const { Router } = require("express");

const router = Router();

router.post("/personal/secret/ms/bot/webhook", (req, res) => {
   console.log(req.url);
   console.log(req.body.value);
   res.end();
});

router.post("/personal/secret/ms/drive/webhook", (req, res) => {
   const { validationToken } = req.query;
   const decodedToken = decodeURIComponent(validationToken);
   console.log(req.body);
   res.setHeader("Content-Type", "text/plain");
   res.send(decodedToken);
});

module.exports = { webHookRouter: router };
