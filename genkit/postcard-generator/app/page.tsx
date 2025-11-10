/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navigation from "./components/Navigation";
import { AuthContextProvider } from "./components/AuthContext";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Postcard Generator - Create Digital Postcards with AI',
  description: 'Generate beautiful personalized digital postcards using advanced AI software. Create custom postcards with Google Cloud Generative AI technology for any occasion.',
  alternates: {
    canonical: 'https://lkminvestec.com'
  }
};

const enabled = (process.env.AUTH_ENABLED?.toLowerCase() !== "false");

const PostcardForm = dynamic(() => import("./components/PostcardForm"), {
  ssr: false, // Prevent this component from rendering on the server
});

export default async function Home() {
  return (
    <AuthContextProvider enabled={enabled}>
      <Navigation />
      <Container maxWidth="xl">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PostcardForm />
        </Box>
      </Container>
    </AuthContextProvider>
  );
}