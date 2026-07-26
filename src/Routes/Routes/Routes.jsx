import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Homes from "../../Pages/Home/Homes";
import PrivacyPolicy from "../../Pages/TermsAndPolicy/PrivacyPolicy";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
       
        children: [
            {
                path: '/',
                element:<Homes/>
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy/>
            }
          
           
        ]
    },
  
    
]);