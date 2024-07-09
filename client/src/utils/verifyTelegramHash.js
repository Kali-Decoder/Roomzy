import crypto from "crypto";

export const verifyTelegramHash = (data, botToken) => {
  const { id, first_name, last_name, username, auth_date, hash } = data;
  const secret = crypto
    .createHmac("sha256", botToken)
    .update(auth_date + "\n" + id)
    .digest();
  const hmac = crypto
    .createHmac("sha256", secret)
    .update(
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
        botToken
    )
    .digest("hex");

  return hmac === hash;
};
