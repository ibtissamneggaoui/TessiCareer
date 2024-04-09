"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import React from "react";
import Container from "./components/Container";
import { Providers } from "./Redux/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <Container>{children}</Container>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
