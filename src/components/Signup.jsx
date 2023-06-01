import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link  } from "react-router-dom";
import {auth} from "../Firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";


const Signup = () => {

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  

  const signup = (e)=> {

    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((value) => console.log(value),alert("Thankyou for creating an account"))
    .catch((error) => alert(error.message));
    
  //   

  }
  // const signup = async ()=>{
  //   try {

  //     const signupuser = await createUserWithEmailAndPassword(
  //       auth,name,email,password
  //     );

  //     console.log(signupuser);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // console.log(userr);
  return (
    <Container maxW={"container.xl"} minH = {"100vh"} p = {"13"}>

      <form id = "signupform"   >
        <VStack alignItems={"stretch"} spacing = "8" w = {["full",96]} m = "auto" my = "16">
          <Heading>Video Hub</Heading>
          <Avatar alignSelf={"center"} boxSize = {"32"}/>
          <Input type = "name" placeholder='name'  focusBorderColor= "purple.500" /*onChange={(e) => setname(e.target.value)}*//>
          <Input type = "email" placeholder='Email' required focusBorderColor= "purple.500" onChange={(e) => setemail(e.target.value)}/>
          <Input type = "password" placeholder='Password' required focusBorderColor= "purple.500" onChange={(e)=> setpassword(e.target.value)}/>

          <Button colorScheme={"purple"} type = "submit" onClick={signup} >Sign Up</Button>

          <Text textAlign={"right"}>
              Already Signed Up? {" "}
              <Button variant={"link"} colorScheme = "purple">
                <Link to = {'/login'}>Login In</Link>
              </Button>
          </Text>
          
          
        </VStack>

      </form>

    </Container>
  )
}
export default Signup

