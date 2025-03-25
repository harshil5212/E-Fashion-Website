const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox', // Fallback to sandbox if undefined
  client_id:"ARcG-iQWsfhdHdajk-T2uf6_Apieq13yFb2T2KgCVlmeb5h5R3W61r4Y4D9sntg8mJhy3cp1YCvAGOp9",
  client_secret: "EOOepKvLsY6QzQDXeurPfjObDREkMZiBhz2fRKVL_HSFqUDppRup_wG4pY5dc-n_cZWNi5ldIGDlOm0U"
});

module.exports = paypal;
