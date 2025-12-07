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

export interface Visit {
  id?: string;
  eventId: string;
  date: string;
  clientsIds: string[];
}

export interface UserEvent {
  id?: string;
  day: string;
  title: string;
  groupId: string;
  endTime: Time;
  startTime: Time;
  created?: MetaData;
  updated?: MetaData;
}