import "reflect-metadata";
import express from "express";
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
// http://localhost:3000
app.listen(3000, () => console.log("Server is running nlw"));