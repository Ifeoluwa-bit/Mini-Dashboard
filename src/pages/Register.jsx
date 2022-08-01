import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { 
    Heading, 
    Flex, 
    FormControl, 
    FormLabel, 
    Input, 
    Button, 
    Select, 
    Box, 
    Checkbox, 
    Radio, 
    RadioGroup,
    Stack 
} from '@chakra-ui/react';



function Register() {

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
      setIsChecked(!isChecked);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data, event) => {
              event.preventDefault();
              navigate("/login", { replace: true });
            console.log(data)
            sessionStorage.setItem('info', JSON.stringify(data));
              
    }

   

    
    

 
    

  return (
    <Box
     py={'5rem'}
     bg={'#0223b6'}
     color={'#fff'}
     
    >

        
        <Heading
         as = 'h2' 
         textAlign={'center'}
         pb={'3rem'}
         fontSize={{base: '1.5rem', md: '2rem'}}
        >
            Techathon Hangout Registration form
        </Heading>

        <Flex
         as = 'form'
         direction={'column'}
         alignItems={'center'}
         justifyContent={'center'}
         gap={5}
         onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>First Name</FormLabel>
                <Input
                 type={'text'} 
                 placeholder={'First Name'}
                 color={'#fff'}
                 {...register("FirstName", { required: true, maxLength: 15 })}
                 
                />
            </FormControl>
            {errors.FirstName && <p style={{ color: 'red' }}>Please Fill in your First Name & make sure it doesn't exceed 15 characters</p>}

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Last Name</FormLabel>
                <Input
                 type={'text'} 
                 placeholder={'Last Name'}
                 {...register("LastName", { required: true, maxLength: 15 })}
                />
            </FormControl>
            {errors.LastName && <p style={{ color: 'red' }}>Please Fill in your Last Name & make sure it doesn't exceed 15 characters</p>}

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Gender</FormLabel>
                <Select {...register("gender", { required: 'Please select your Gender' })} >
                    <option selected="selected" disabled="disabled">Select your Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Transgender'>Transgender</option>
                </Select>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
            </FormControl>
            

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Age Category</FormLabel>
                <Select {...register("AgeCategory", { required: true })}>
                    <option selected="selected" disabled="disabled">Select your Age Category</option>
                    <option value='15 to 18'>15 to 18</option>
                    <option value='19 to 24'>18 to 24</option>
                    <option value='25 to 30'>25 to 30</option>
                </Select>
            </FormControl>

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>E-mail</FormLabel>
                <Input
                 type={'email'} 
                 placeholder={'Enter your email'} 
                 {...register("email",
                 { 
                    required: true,  
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })} 
                />
            </FormControl>

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                 type={'tel'} 
                 placeholder={'Enter your phone number'}
                 {...register("PhoneNumber", { 
                    required: true, 
                    pattern: /^\+?[1-9][0-9]{7,14}$/
                })}     
                />
            </FormControl>
            {errors.PhoneNumber && <p style={{ color: 'red' }}>Please start your phone number with your country code!</p>}

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Address</FormLabel>
                <Input
                 type={'text'} 
                 placeholder={'Address'}
                 {...register("Address")}
                />
            </FormControl>

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Username</FormLabel>
                <Input
                 type={'text'} 
                 placeholder={'Create your username'}
                 {...register("Username", { required: true })}
                />
            </FormControl>
            {errors.Username && <p style={{ color: 'red' }}>Please Fill in a Username</p>}

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Password</FormLabel>
                <Input
                 type={'password'} 
                 placeholder={'Create your password'} 
                 {...register("Password", { 
                    required: true, 
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}/>
            </FormControl>
            {errors.Password && <p style={{ color: 'red' }}>Must be between 6 & 15 characters, at least one uppercase letter, one lowercase letter and one number</p>}

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                 type={'password'} 
                 placeholder={'Confirm your password'}
                 {...register("ConfirmedPassword", { required: true, })}
                 
                 />
            </FormControl>
            
            

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>T-Shirt</FormLabel>
                <RadioGroup>
                    <Stack spacing={5} direction='row'>
                        <Radio {...register("TShirt")} colorScheme={'red'} value='Yes'>Yes</Radio>
                        <Radio {...register("TShirt")} colorScheme={'red'} value='No'>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <FormLabel>T-Shirt Size</FormLabel>
                <Select {...register("Size", { required: true })} >
                    <option selected="selected" disabled="disabled">Select your size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra-large'>Extra large</option>
                </Select>
            </FormControl>

            <FormControl width={{base: '80%', md: '70%', lg: '50%'}}>
                <Checkbox onChange={handleChange} colorScheme={'red'} >I agree to Terms and Conditions <br/> </Checkbox>
            </FormControl>
            {isChecked ? "Checked" : ``}

            
            

            <Button type='submit' colorScheme='red'>
                Register
            </Button>

        </Flex>
    </Box>
  )
}

export default Register