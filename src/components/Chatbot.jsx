"use client";

import { useEffect } from "react";

export default function N8nChatbot() {
  useEffect(() => {
    const id = "n8n-chat-script";
    if (document.getElementById(id)) return;

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // Function to get theme variables
    const getChatColors = () => {
      const root = document.documentElement;
      return {
        textareaBackground: getComputedStyle(root).getPropertyValue(
          "--chat--textarea--background"
        ),
        textareaColor: getComputedStyle(root).getPropertyValue(
          "--chat--textarea--color"
        ),
        caretColor: getComputedStyle(root).getPropertyValue(
          "--chat--caret-color"
        ),
        botMessageBackground: getComputedStyle(root).getPropertyValue(
          "--chat--message--bot--background"
        ),
        botMessageColor: getComputedStyle(root).getPropertyValue(
          "--chat--message--bot--color"
        ),
        userMessageBackground: getComputedStyle(root).getPropertyValue(
          "--chat--message--user--background"
        ),
        userMessageColor: getComputedStyle(root).getPropertyValue(
          "--chat--message--user--color"
        ),
      };
    };

    // Load JS
    const script = document.createElement("script");
    script.id = id;
    script.type = "module";
    script.innerHTML = `
      import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

      const colors = (${getChatColors.toString()})();
      
      createChat({
        webhookUrl: "https://ishangiri.app.n8n.cloud/webhook/6ce4b0e4-3b14-4050-bac6-bc587e2fc18f/chat",
        mode: "popup",
        initialMessages: [
          "Hey 👋 I’m Ishan’s AI assistant.",
          "Ask me anything about Ishan Giri, his work, or his projects.",
          "I can also draft emails to Ishan on behalf of you!"
        ],
        styles: {
          textareaBackground: colors.textareaBackground,
          textareaColor: colors.textareaColor,
          caretColor: colors.caretColor,
          botMessageBackground: colors.botMessageBackground,
          botMessageColor: colors.botMessageColor,
          userMessageBackground: colors.userMessageBackground,
          userMessageColor: colors.userMessageColor,
        }
      });

      // Listen for theme changes
      const observer = new MutationObserver(() => {
        const updatedColors = (${getChatColors.toString()})();
        document
          .querySelector("n8n-chat")?.updateStyles?.(updatedColors);
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
}
