import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import { AppLayout } from "../layout/AppLayout";

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = () => {
  return (
    <ChakraProvider>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </ChakraProvider>
  );
};
