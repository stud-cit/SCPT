export interface Pages {
  title: string;
  icon: string;
  to: string;
}

export interface Invites {
  icon: string;
  to: string;
}

export interface Message {
  status: string;
  context: string;
}

export interface Error {
  statusCode: string;
}
