import { Outlet, Navigate } from 'react-router-dom';


export default function AuthLayout() {
   const isAuthenticated = false;
   return (
      <>
         {isAuthenticated ? (
            <Navigate to="/" />
         ) : (
               <>
                  <section className='flex flex-1 justify-center items-center flex-col py-10'>
                     <Outlet />
                  </section>
                  <img
                     src='https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                     className='hidden sm:block h-screen w-1/2 object-cover bg-no-repeat'
                     alt='image'
                  />
               </>
         )}
      </>
   );
}
