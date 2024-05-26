import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto px-6">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
