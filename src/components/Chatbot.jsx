"use client";

import { useEffect } from "react";

export default function ZapierChatbot() {
  useEffect(() => {
    // ensure the script is added only once
    const id = "zapier-chatbot-script";
    if (document.getElementById(id)) return;

    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.type = "module";
    s.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    document.body.appendChild(s);
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="cmitud7vo006xed7fulvcdnpr"
    />
  );
}
