import { Client, Databases, Account} from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint
  .setProject('67233d390007bc01d390'); // Replace with your actual project ID

// Initialize the Databases service
const databases = new Databases(client);
const account = new Account(client);

// Assuming you have a database ID and collection ID
const databaseId = '67233d390007bc01d390'; // Replace with your actual database ID
const collectionId = 'your-collection-id'; // Replace with your actual collection ID

// Function to create a document in the specified collection
async function createDocument(data: any) {
  try {
    const response = await databases.createDocument(databaseId, collectionId, 'unique()', data);
    console.log('Document created:', response);
    return response; // Return the created document response if needed
  } catch (error) {
    console.error('Error creating document:', error);
    throw error; // Re-throw the error for further handling
  }
}

// Export the client and databases for use in other parts of your application
export { client, databases, createDocument, account };
