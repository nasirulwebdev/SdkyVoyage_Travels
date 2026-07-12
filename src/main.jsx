import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./context/AuthContext";
import LanguageProvider from "./context/LanguageContext";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <LanguageProvider>
        
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <Toaster richColors position="top-right" />
      </LanguageProvider>
      </AuthProvider>
    
  </StrictMode>
);