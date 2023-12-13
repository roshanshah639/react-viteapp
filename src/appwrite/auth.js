import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //   Signup
  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //   Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //   getCurrentUser
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Apprwrite service:: getCurrentUser ::", error);
    }
    return null;
  }

  //   Logout
  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log("Apprwrite service:: logout ::", error);
    }
  }
}

const authService = new AuthService();

export default authService;
