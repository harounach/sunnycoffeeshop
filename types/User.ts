export default interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string; 
  accessToken?: string;
}
