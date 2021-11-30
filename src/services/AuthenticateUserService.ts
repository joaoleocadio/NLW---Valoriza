import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    // Verificar se a senha está correta -> Comparar a senha do utilizador com a senha com hash
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    // Gerar Token
    const token = sign({
      email: user.email,
    }, "7fb391545b7ca20feae5ab0b07a4fc6b", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }

}

export { AuthenticateUserService };