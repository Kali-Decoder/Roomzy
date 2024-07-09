import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthDataValidator } from "@telegram-auth/server";
import { urlStrToAuthDataMap } from "@telegram-auth/server/utils";

const TelegramAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const validator = new AuthDataValidator({
    botToken: process.env.REACT_APP_BOT_TOKEN,
  });

  useEffect(() => {
    const validateAuthData = async () => {
      const data = urlStrToAuthDataMap(searchParams.toString());

      try {
        const user = await validator.validate(data);
        console.log("Authenticated user:", user);
        // You can now sign in the user or redirect them to a logged-in page
      } catch (error) {
        console.error("Validation failed:", error);
      }
    };

    validateAuthData();
  }, [searchParams, validator]);

  return <div>Authentication in progress...</div>;
};

export default TelegramAuthCallback;
