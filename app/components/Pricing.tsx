import { Box, Button, Flex, Heading, HStack, Text,Icon, Image, Img } from '@chakra-ui/react'
import React from 'react'
import { CheckmarkIcon } from './CheckmarkIcon'

export const Pricing = () => {
  return (
    <Box margin={'auto'} maxW="950px" mt="-150px" borderRadius={'16px'} overflow="hidden"
    boxShadow={'0px 20px 25px -5px rgba(0,0,0,0.2), 0px 10px 10px -5px rgba(0,0,0,0.04)'}
    mx={{base:"20px",lg:"auto"}}
    >
        <Flex direction={{base:"column",lg:"row",md:"column"}}>
        <Box bg="#9d93e7" p="40px" textAlign={"center"}>
            <Text fontSize="24px" fontWeight="bold" >Premium Pro</Text>
            <Heading fontSize="60px">$360</Heading>
            <Text >billed just once</Text>
            <Button color="white" bg="#805AD5" width="300px" mt="25px">Get Started</Button>
        </Box>

        {/* box2 */}
        <Box pt="50px" pl="25px" pr={'10px'} bg={'white'}>
            <Text mb={'10px'}>Access these features when you get this pricing package for your business</Text>

            <HStack mb="15px">
              <Icon as={CheckmarkIcon}></Icon>              
                <Text>International calling and messaging API</Text>
            </HStack>

            <HStack mb="15px">
              <Icon as={CheckmarkIcon}></Icon>              
                <Text>Additional phone numbers</Text>
            </HStack>

            <HStack mb="15px">
              <Icon as={CheckmarkIcon}></Icon>              
                <Text>Automated messages via zapier</Text>
            </HStack>

            <HStack mb="15px">
              <Icon as={CheckmarkIcon}></Icon>              
                <Text>24/7 support and consulting</Text>
            </HStack>
        </Box>
        </Flex>
   

    </Box>
  )
}
