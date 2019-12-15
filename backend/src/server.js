const express = require("express");
// express microframework, nos ajuda com rotas e outras funcionalidades..
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");
// ./pasta indica que é um diretório e nao um módulo (caminho relativo)

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(
  "mongodb+srv://desenvolvedor:desenvolvedor@codeandcoffe-trrr3.mongodb.net/condeAndCoffeDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connectedUsers = {};

io.on("connection", socket => {
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

// passamos rota, funcao para recuperar parametros
// req -> recebe infos q user envia / res -> devolve a resposta pro user

// req.query -> acessar query params (para filtros)
// req.params -> acessar route params (para edit, delete)
// req.body -> acessar corpo da requisicao (create, edit) {req.body}

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
