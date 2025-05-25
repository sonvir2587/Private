body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  background: #111;
  color: white;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  padding: 20px;
}

.message h1 {
  font-size: 2.5em;
  margin: 0.5em 0;
  color: #ffccff;
}
