export type CreateUserDTO = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;

export type UsernameAndEmail = {
  username: string;
  email: string;
};
