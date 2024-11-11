
import { setupSdk } from "dissonity";


window.addEventListener('DOMContentLoaded', () => {

  setupSdk({
    clientId: process.env.PUBLIC_CLIENT_ID!,
    scope: [
      "identify",
      "guilds",
      "guilds.members.read",
      "applications.commands"],
    tokenRoute: "/api/token"
  });
});