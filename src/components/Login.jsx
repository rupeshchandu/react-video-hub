import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom" 
import {auth} from "../Firebase";
import {signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {

  const [signinemail,setsigninemail] = useState("");
  const [signinpassword,setsigninpassword] = useState("");


  const login = (e) =>{
    e.preventDefault(); 
    
    signInWithEmailAndPassword(auth,signinemail,signinpassword)
    .then((v) => {
      alert("Suceesfully Login");

    }
    ).catch((error) => {
      alert(error.message);
    })
  }


  // const [user,setuser] = useState({});

  // onAuthStateChanged(auth, (currentuser)=>{
  //   setuser(currentuser);
  // });

  // const login = async ()=>{
  //   try {
  //     const user1 = await signInWithEmailAndPassword(
  //       auth,
  //       signinemail,
  //       signinpassword
  //       );

  //     console.log(user1);
  //   }
  //   catch (error) {
  //     console.log(error.message);
  //     alert("Please signup")
  //   }
  // }
  // console.log(user);


  return (
    <Container maxW={"container.xl"} h = {"100vh"} p = {"16"}>
         
      <form  id = "loginform">
        <VStack alignItems={"stretch"} spacing = "8" w = {["full",96]} m = "auto" my = "16">
          <Heading>Welcome Back</Heading>
          <Input type = "email" placeholder='Email' required focusBorderColor= "purple.500" onChange={(e)=>setsigninemail(e.target.value)}/>
          <Input type = "password" placeholder='Password' required focusBorderColor= "purple.500" onChange={(e)=> setsigninpassword(e.target.value)}/>
        
          <Button variant={"link"} alignSelf = "flex-end">
            <Link to = {"/forgetpassword"}>Forget Password</Link>
          </Button>
           
          <Button colorScheme={"purple"} type = "submit" onClick={login} >Log In</Button>
           
          <Text textAlign={"right"}>
              New User? {" "}
              <Button variant={"link"} colorScheme = "purple">
                <Link to = {'/signup'}>Sign Up</Link>
              </Button>
          </Text>
          
          
        </VStack>

      </form>

    </Container>
  )
}

export default Login