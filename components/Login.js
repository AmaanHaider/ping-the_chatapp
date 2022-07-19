import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div style={{
      backgroundColor: "#748DA6"
    }} >

      <Head>
        <title>Login</title>
      </Head>

      <Center h="100vh">

        <Stack
          align="center"
          bgColor="#9CB4CC"
          p={16}
          rounded="3xl"
          spacing={30}
          boxShadow="lg"
          w="30%"
          h="55%"
        >


           <Text p={2} style={{
            color:"black",
            backgroundColor:"#C4D7E0",
            fontSize:"40px",
            fontFamily:"fantasy",
            borderRadius:"22%"
            // boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }}>
            Ping- The chatApp
          </Text> 
          <Box
            bgColor="blue.500"
            w="fit-content"
            p={5}
            rounded="3xl"
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>


          <Button boxShadow="md" onClick={() => signInWithGoogle("", { prompt: "select_account" })}>Sign In with Google</Button>

        </Stack>

      </Center>

    </div>
  )
}