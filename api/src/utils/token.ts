import jwt from "jsonwebtoken";

export interface TokenPayload {
  id: string;
  role: "candidate" | "recruiter" | "admin";
}

export function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: (process.env.ACCESS_TOKEN_EXPIRES_IN ?? "15m") as string,
  } as jwt.SignOptions);
}

export function generateRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: (process.env.REFRESH_TOKEN_EXPIRES_IN ?? "7d") as string,
  } as jwt.SignOptions);
}

export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as TokenPayload;
}

export function verifyRefreshToken(token: string): TokenPayload {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!) as TokenPayload;
}