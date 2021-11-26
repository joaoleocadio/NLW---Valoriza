import "reflect-metadata";
import express from "express";

import "./database"
//@types/express
const app = express();

/**
 * GET     -> Buscar uma informação
 * POST    -> Inserir ou criar informação
 * PUT     -> Alterar uma informação
 * DELETE  -> Apagar uma informação
 * PATCH   -> Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 * Route Params -> http://localhost:3000/produtos/2223
 * Query Params -> http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body Params -> {
 *  "name:" : "teclado",
 *  "description" : "tecladobom" 
 * }
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