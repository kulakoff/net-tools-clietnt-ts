export interface GenericResponse {
  status: string;
  message: string;
}

export interface IResetPasswordRequest {
  resetToken: string;
  password: string;
  passwordConfirm: string;
}

export interface IPostRequest {
  title: string;
  content: string;
  image: string;
  user: string;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isActivated: boolean;
  activatedAt: null | string;
  activationLink: string;
  role: [string];
  photo: string;
  createdAt: string;
  updatedAt: string;
}


