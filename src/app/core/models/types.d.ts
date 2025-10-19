export interface UserData {
  id: string;
  token: string;
}

export interface User {
  id?: string;
  email?: string;
  pass?: string;
  name?: string;
  surname?: string;
  phone?: string;
  role?: string;
  photo?: string;
}
