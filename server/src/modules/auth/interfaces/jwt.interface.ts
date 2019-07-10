export interface JwtPayload {
  login: string;
}

export interface JwtToken {
  expiresIn: number;
  token: string;
}
