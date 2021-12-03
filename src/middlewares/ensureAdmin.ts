import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

  const { user_id } = request;
  console.log(user_id);

  const usersRepositiories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositiories.findOne(user_id);

  //Verificar se o utilizador é admin
  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  })
}