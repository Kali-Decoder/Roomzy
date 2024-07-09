import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyTelegramHash } from "./utils/verifyTelegramHash"; 

const TelegramAuthCallback = () => {
  const navigate = useNavigate();
  const botToken = "7039254736:AAFtZOqu6VUmjjrGcGXOWv6prJYXz3d_r3s"; 

  useEffect(() => {
    const getHashParams = () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      return {
        id: params.get("id"),
        first_name: params.get("first_name"),
        last_name: params.get("last_name"),
        username: params.get("username"),
        auth_date: params.get("auth_date"),
        hash: params.get("hash"),
      };
    };

    const data = getHashParams();

    if (verifyTelegramHash(data, botToken)) {
      // Call your backend API to generate a token
      fetch("https://roomzy-876.vercel.app/api/v1/generate-token", {
        // Make sure to use the correct URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("token", result.token); // Store token
          navigate("/events");
        })
        .catch((error) => {
          console.error("Error:", error);
          navigate("/login");
        });
    } else {
      // Handle invalid hash
      navigate("/login");
    }
  }, [navigate, botToken]);

  return <div>Processing...</div>;
};

export default TelegramAuthCallback;
