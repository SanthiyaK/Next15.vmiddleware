"use server"

import dbconnect from "@/db/dbconnect";
import UserModels from "@/model/UserModel";
import bcrypt from 'bcrypt';
import { SignJWT } from "jose";
import dotenv from 'dotenv'
import { cookies } from "next/headers";
import Product from "@/model/ProductModel";

dotenv.config()
export async function UserRegister(formData) {
   const email = formData.get("email");
   const password = formData.get("password");
try{
   await dbconnect(); // Ensure DB connection is established
   const existingUser = await UserModels.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists with this email" };
    }
   // Hash the password
  
   const hashedPassword = await bcrypt.hash(password, 10);

   // Create new user
   const UserRegisterpost = new UserModels({ email, password: hashedPassword });
   await UserRegisterpost.save();

   return { success: true, message: "Registration successful!" };
}
catch (error) {
   // Catch any error that occurs during the process and log it
   console.error("Error during user registration:", error);
   return { success: false, message: "An error occurred during registration. Please try again later." };
 }
}
export async function UserLogin(formData) {
    const SECRET_KEY=process.env.JWT_SECRET_KEY
    const encodedsecretkey=new TextEncoder().encode(SECRET_KEY)
   const email = formData.get("email");
   const password = formData.get("password");
   await dbconnect(); // Ensure DB connection is established

      // Find the user by email
   const user = await UserModels.findOne({ email });

      if (!user) {
         return { success: false, message: "User not found." };
      }
      // Compare provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         return { success: false, message: "Invalid password." };
      }
      // Create JWT token using secret from .env file
      const token= await new SignJWT({ user })  // Add user information to the payload
      .setIssuedAt()  // Set the issued at time
      .setExpirationTime('1h')  // Set token expiration (1 hour)
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .sign(encodedsecretkey);  // Sign the token with the secret key
     
       
      const cookieStore = await cookies();
      cookieStore.set('token', token, {
         httpOnly: true,  // Makes it inaccessible to JavaScript (better security)
         maxAge: 60 * 60,  // 1 hour
         path: '/' // Available across the entire app
         
      });

      const plainUser = user.toString();
      // Return token and user data
      return { success: true, message: "Login successful!", token,  user: plainUser };
   
}  
export async function UserLogout(){
   const cookieStore = await cookies();
   // Delete the 'token' cookie to log the user out
   cookieStore.delete('token');
 
   // Return a success response
   
   return { success: true, message: "Logged out successfully"};
}
// Server action to fetch all products from MongoDB
export async function fetchProducts() {
   try {
     await dbconnect();  // Ensure DB is connected
     
     // Use lean() to return plain JavaScript objects instead of Mongoose documents
     const products = await Product.find().lean(); // .lean() returns plain objects
     
     return products;  // Return the plain product objects
   } catch (error) {
     console.error("Error fetching products:", error);
     throw new Error('Unable to fetch products');
   }
 }
 export default async function fetchProduct(id) {
      
   try {
     await dbconnect(); // Ensure DB is connected
     // Use lean() to return plain JavaScript objects instead of Mongoose documents
     const product = await Product.findById(id).lean()
    return product;
   } catch (error) { 
     console.error("Error fetching products:", error);
     throw new Error('Unable to fetch products');
   }
 
}
 