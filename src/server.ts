import express from "express";

//@types/express
const app = express();

/**
 * GET     -> Buscar uma informação
 * POST    -> Inserir ou criar informção
 * PUT     -> Alterar uma informação
 * DELETE  -> Apagar uma informação
 * PATCH   -> Alterar uma informação específica
 */

app.get("/test", (request, response) => {
  // Request -> Entrando
  // Response -> Saindo
  return response.send("Olá Mundo!")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá Mundo! POST")
})
// http://localhost:3000
app.listen(3000, () => console.log("Server is running nlw"));