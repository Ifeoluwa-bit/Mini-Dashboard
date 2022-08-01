import React, {useEffect, useState} from 'react'
import { 
    Heading,
    Box, 
    Stack
} from '@chakra-ui/react';



function Dashboard() {
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    // Access initial value from session storage
    const registerInfo =sessionStorage.getItem("info");
    const userInfo = JSON.parse(registerInfo);
    setUserdata(userInfo);
    alert(userInfo);
    alert(registerInfo);
    
    
  }, []); 

 


  
  return (
    <Box
     py={'5rem'}
     bg={'#fffdd0'}
     height={'100vh'}
    >

        <Heading
         as = 'h2' 
         textAlign={'center'}
         pb={'3rem'}
        >
            Here is your Entry Ticket to the Hangout
        </Heading>

        <Stack></Stack>
       

        

    </Box>
  )
}

export default Dashboard