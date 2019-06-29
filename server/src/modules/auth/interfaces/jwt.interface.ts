export interface JwtPayload {
  login: string;
  createAt: Date;
  updateAt: Date;
}

export interface JwtToken {
  expiresIn: number;
  token: string;
}
