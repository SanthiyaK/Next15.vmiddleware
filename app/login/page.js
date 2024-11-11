"use client"
import { UserLogin } from '../action';
import { useRouter } from 'next/navigation';
export default function LoginForm() {
   const router = useRouter();
   const handleSubmit = async (formData) => {
      const result = await UserLogin(formData); 
      if (result.success) {
         console.log(result.token);  
         router.push("/dashboard")  
      }  
   }
   return (
      <>
         <form action={handleSubmit} className="m-20">
            <h1 className="m-10">Login Form</h1>
            
            <label className="m-10 p-1 mb-5">Email</label> <br />
            <input className="border border-blue-500 rounded m-2"
               type="email"
               name="email"
               required />
            <br />
            
            <label className="m-10 p-2">Password</label><br />
            <input className="border border-blue-500 rounded m-1"
               type="password"
               name="password"
               required />
            <br />
            
            <button className="m-10 bg-violet-500 p-2" type="submit">
               Submit
            </button>
         </form>

      
      </>
   );
}
