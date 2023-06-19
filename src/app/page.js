"use client";
import { Container, Text } from "@/app/chakra";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { useState } from "react";
import UserProfile from "./Components/UserProfile";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"}>
        Search users on Github
      </Text>
      <Search setUserData={(res) => setUserData(res)} setLoading={setLoading} />
      {userData && <UserProfile userData={userData} />}
    </Container>
  );
}
