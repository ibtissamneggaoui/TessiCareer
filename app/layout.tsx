"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import theme from "../theme";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
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
          {" "}
          {/* encapsulates the logic for caching router-related data, such as fetched page content, route configurations, or navigation state.*/}
          <ThemeProvider theme={theme}>
            <SideBar>
              <Providers>
              {children}
              </Providers>
              <Footer />
            </SideBar>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
