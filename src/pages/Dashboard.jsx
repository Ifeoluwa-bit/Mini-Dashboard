import React, {useEffect, useState} from 'react'
import { 
    Heading,
    Box, 
    Flex,
    Text,
} from '@chakra-ui/react';



function Dashboard() {
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    // Access initial value from session storage
    const registerInfo =sessionStorage.getItem("info");
    const userInfo = JSON.parse(registerInfo);
    setUserdata(userInfo); 
    console.log(setUserdata)   
   
    
  }, []); 

 


  
  return (
    <Box
     py={'5rem'}
     bg={'#0223b6'}
     color={'#000'}
    

     
     
    >

        <Heading
         as = 'h2' 
         textAlign={'center'}
         pb={'3rem'}
         color={'#fff'}
        >
            Here is your Entry Ticket to the Hangout
        </Heading>

        <Box bg={'#fff'} w ={{base: '85%', md: '70%', lg: '50%'}} mx={'auto'} borderRadius={'1rem'} p={'2rem'} boxShadow={'0 0 1px 1.2px  #a0a0a0'}>
          {userdata ?
            <Flex
             direction={'column'} 
             justifyContent={'center'} 
             alignItems={'start'}
             gap={'1.5rem'}
             
             
             > 
                  <Text className='bold'>
                    <b >First Name:</b> {userdata.FirstName} 
                  </Text>

                  <Text className='bold'>
                    <b >Last Name:</b> {userdata.LastName} 
                  </Text>

                  <Text className='bold'>
                    <b>Gender:</b> {userdata.gender} 
                  </Text>

                  <Text className='bold'>
                    <b>Email:</b> {userdata.email} 
                  </Text>

                  <Text className='bold'>
                    <b>Phone Number:</b> {userdata.PhoneNumber} 
                  </Text>

                  <Text className='bold'>
                    <b >Age Category:</b> {userdata.AgeCategory} 
                  </Text>

                  <Text className='bold'>
                    <b>Address:</b> {userdata.Address} 
                  </Text>

                  <Text className='bold'>
                    <b >T-Shirt:</b> {userdata.TShirt} 
                  </Text>

                  <Text className='bold'>
                    <b>T-Shirt Size:</b> {userdata.Size} 
                  </Text>

                  <Text className='bold'>
                    <b>Username:</b> {userdata.Username} 
                  </Text>

                  <Text className='bold'>
                    <b>Password:</b> {userdata.Password} 
                  </Text>

            </Flex>
            
             : 'error'}
        </Box>
       

        

    </Box>
  )
}

export default Dashboard