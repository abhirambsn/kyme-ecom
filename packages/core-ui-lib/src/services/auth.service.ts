import { Axios } from 'axios';
import { IAuthService } from '../interfaces/auth.service.interface';

export default class AuthService implements IAuthService {
  axiosClient: Axios;
  token?: string | undefined;

  constructor(axiosClient: Axios, token?: string) {
    this.axiosClient = axiosClient;
    this.token = token;
  }

  setToken(token: string): void {
    console.log('Setting token:', token);
    throw new Error('Method not implemented.');
  }
  login(email: string, password: string): Promise<void> {
    console.log('Logging in with:', email, password);
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
  register(email: string, password: string): Promise<void> {
    console.log('Registering with:', email, password);
    throw new Error('Method not implemented.');
  }
  getProfile(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  editProfile(data: unknown): Promise<void> {
    console.log('Editing profile with:', data);
    throw new Error('Method not implemented.');
  }
}
