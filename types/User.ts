export default interface User {
  _id: string;
  name: string;
  email: string;
  admin: boolean;
  createdAt: string; 
  accessToken?: string;
}
