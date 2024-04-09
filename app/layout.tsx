"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import React from "react";
import Container from "./components/Container";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
           <Container>
              {children}
           </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
