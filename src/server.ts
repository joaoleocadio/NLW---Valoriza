import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database"

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
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({ message: err.message })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
})
// http://localhost:3000
app.listen(3000, () => console.log("Server is running nlw"));