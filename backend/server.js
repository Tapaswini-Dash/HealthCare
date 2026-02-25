

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(cors());
app.use(express.json());

let latestPatientData = {};

// ESP32 sends data here
app.post("/api/esp32-data", (req, res) => {
  const data = req.body;

  console.log("ESP32 Data:", data);

  // Save latest data
  latestPatientData = data;

  // Emit to frontend in real-time
  io.emit("patient-data", data);

  res.json({ message: "Data received" });
});

// Frontend fetch route
app.get("/api/patient/:id", (req, res) => {
  res.json(latestPatientData);
});

io.on("connection", (socket) => {
  console.log("Frontend connected");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});