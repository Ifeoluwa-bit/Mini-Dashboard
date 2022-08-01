import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { 
    Heading, 
    Flex, 
    FormControl, 
    FormLabel, 
    Input, 
    Button, 
    Box, 
} from '@chakra-ui/react';



function Login() {

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});

    useEffect(() => {
        // Access initial value from session storage
        const registerInfo =sessionStorage.getItem("info");
        const userInfo = JSON.parse(registerInfo);
        setUserdata(userInfo)
    
         
      }, []); 

    const onSubmit = (data, event) => {
              event.preventDefault();
              if(userdata?.Username === data.Username && userdata?.Password === data.Password){
                navigate("/dashboard", { replace: true });
               console.log(data);
              } else{
                alert("Incorrect Username or Password, input the correct details and try again!")
              }
              
    }

   


  return (
    <Box
     py={'5rem'}
     bg={'#fffdd0'}
     h={'100vh'}
     
    >

        <Heading
         as = 'h2' 
         textAlign={'center'}
         pb={'3rem'}
        >
            Enter Your Login Details
        </Heading>

        <Flex
         as = 'form'
         direction={'column'}
         alignItems={'center'}
         justifyContent={'center'}
         gap={5}
         onSubmit={handleSubmit(onSubmit)}
        >

            <FormControl width={'50%'}>
                <FormLabel>Username</FormLabel>
                <Input type={'text'} placeholder={'Enter your username'}
                     {...register("Username")}
                />
            </FormControl>

            <FormControl width={'50%'}>
                <FormLabel>Password</FormLabel>
                <Input type={'password'} placeholder={'Enter your password'} 
                 {...register("Password")}
                />
                
            </FormControl>

            <Button type='submit' colorScheme='teal'>
                Login
            </Button>


        </Flex>

    </Box>
  )
}

export default Login