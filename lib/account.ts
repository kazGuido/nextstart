// src/lib/account.ts

import { account } from '../lib/appwrite';
import { User } from '../types/user';

// Function to log in a user using email and password
export async function loginUser(email: string, password: string): Promise<void> {
  try {
    await account.createEmailPasswordSession(email, password); // Correct method to create session createEmailPasswordSession
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

// Function to log out the current user
export async function logoutUser(): Promise<void> {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
}

// Function to get the current authenticated user
export async function getCurrentUser(): Promise<User | null> {
    try {
      const appwriteUser = await account.get(); // Assume type is User<Preferences>
      const user: User = {
        ...appwriteUser,
        status: appwriteUser.status ? 1 : 0, // Convert boolean to number if needed
      };
      return user;
    } catch (error) {
      console.error('Failed to get current user:', error);
      return null;
    }
  }