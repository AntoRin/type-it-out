const { Router } = require("express");

const router = Router();

router.post("/personal/secret/ms/bot/webhook", (req, res) => {
   console.log(req.url);
   console.log(req.body.value);
   res.end();
});

router.post("/personal/secret/ms/drive/webhook", (req, res) => {
   try {
      const { validationToken } = req.query;
      if (validationToken) {
         const decodedToken = decodeURIComponent(validationToken);
         res.setHeader("Content-Type", "text/plain");
         res.send(decodedToken);
         return;
      }

      console.log(req.body);
      res.status(200).end();
   } catch (error) {
      res.status(200).end();
   }
});

router.post("/personal/secret/ms/chat/webhook", async (req, res) => {
   try {
      const { validationToken } = req.query;
      if (validationToken) {
         const decodedToken = decodeURIComponent(validationToken);
         res.setHeader("Content-Type", "text/plain");
         res.send(decodedToken);
         return;
      }

      const { value, validationTokens } = req.body;

      // console.log("Resource Data", value[0].resourceData);
      // console.log("Encryption Content", value[0].encryptedContent);

      const encryptedData = value[0].encryptedContent.data;

      const decryptedData = crypto.privateDecrypt(
         {
            key: process.env.PRIVATE_KEY,
         },
         encryptedData
      );

      console.log("Decrypted Data: ", decryptedData.toString());

      res.status(200).end();
   } catch (error) {
      console.log(error);
      res.status(200).end();
   }
});

module.exports = { webHookRouter: router };
