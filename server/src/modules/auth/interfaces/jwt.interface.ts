export interface JwtPayload {
  login: string;
  timestamp: Promise<{
    createAt: Date;
    updateAt: Date;
  }>;
}

export interface JwtToken {
  expiresIn: number;
  token: string;
}
