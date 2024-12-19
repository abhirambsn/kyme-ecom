import { Axios } from 'axios';

export interface IAuthService {
  axiosClient: Axios;
  token?: string;

  setToken(token: string): void;
  login(email: string, password: string): Promise<void>;
  logout(): void;
  register(email: string, password: string): Promise<void>;
  getProfile(): Promise<void>;
  editProfile(data: unknown): Promise<void>;
}
