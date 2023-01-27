const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config({path:"variables.env"});

/*//mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUniFiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {
    console.log("ERROR: " + error.mensage);
})
mongoose.set('strictQuery', false);*/


app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), () => {
    console.log("Servidor Rodando na porta: " + server.address().port)
});  