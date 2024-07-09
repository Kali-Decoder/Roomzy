import CryptoJS from "crypto-js";

export const verifyTelegramHash = (data, botToken) => {
  const { id, first_name, last_name, username, auth_date, hash } = data;
  const secret = CryptoJS.HmacSHA256(
    auth_date + "\n" + id,
    botToken
  ).toString();
  const hmac = CryptoJS.HmacSHA256(
    auth_date +
      "\n" +
      id +
      "\n" +
      first_name +
      "\n" +
      last_name +
      "\n" +
      username +
      "\n" +
      botToken,
    secret
  ).toString(CryptoJS.enc.Hex);

  return hmac === hash;
};
