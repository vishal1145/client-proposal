const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 80, // Change this if needed
    host: "0.0.0.0", // Allows access from other devices
    allowedHosts: "all", // Allows ngrok connections

    client: {
      webSocketURL: {
        protocol: "wss", // Use secure WebSocket
        hostname: "192.168.1.5", // Change this to match your network setup
        port: "443", // Change this if needed (default for HTTPS)
        pathname: "/ws", // Keep this the same
      },
    },
  },
});
