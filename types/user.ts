// src/types/User.ts

export interface User {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    email: string;
    name: string;
    registration: string;
    status: number; // Ensure this is a number as per Appwrite's documentation
    preferences?: any; // Adjust based on your preferences schema
    // Add other fields as necessary
  }
  