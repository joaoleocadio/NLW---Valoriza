import { UsersRepositories } from "../repositiories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = new UsersRepositories();

    if (!email) {
      throw new Error("Email Incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({ name, email, admin });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };