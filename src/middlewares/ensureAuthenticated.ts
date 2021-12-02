import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Receber o token
  const authToken = request.headers.authorization;

  //Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  //Dividir a String Bearer "dfsjsdafgagdfjofgd" pelo espaço
  const [, token] = authToken.split(" ");

  //Validar se o token é válido
  try {
    const { sub } = verify(token, "7fb391545b7ca20feae5ab0b07a4fc6b") as IPayLoad;

    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }


  //Recuperar informações do utilizador 


}