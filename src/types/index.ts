export interface IPayloadSignUp {
  email: string;
  password: string;
  name: string;
}

export interface IPayloadSignIn {
  email: string;
  password: string;
}

export interface IPayloadUser {
  email: string;
  password: string;
  name: string;
}

export interface IPayloadDeleteTask {
  id: string;
}

export interface IPayloadUpdateTask {
  title?: string;
  desc?: string;
  completed?: boolean;
  date?: Date;
  important?: boolean;
}
export interface IPayloadCreateTask {
  desc: string;
  title: string;
  date: Date;

  important: boolean;
}

export interface IResponseUser {
  email: string;
  name: string;
  id: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponseTask {
  desc: string;
  title: string;
  date: Date;
  ownerId: string;
  completed: boolean;
  important: boolean;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponseSignUp {
  data: IResponseUser;
  message: string;
}

export interface IResponseLogin {
  message: string;
}

export interface IResponseCreateTask {
  data: IResponseTask;
  message: string;
}

export interface IRespondUpdateTask {
  message: boolean;
}

export interface IPayloadUpdateTaskFromParams {
  id: string;
}
