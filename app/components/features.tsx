import { Box,Flex,HStack,Icon, Text } from '@chakra-ui/react'
import React from 'react'
import icon4 from './icon1'

import { icon2 } from './icon2'
import { Icon3 } from './icon3'

export const Icon1 = () => {
  return (
    <Box maxW={'800px'} m="auto" mt={'25px'}  pl="50px" pr={'50px'}>
        <Flex direction={{base:"column",lg:"row"}}>
        <HStack mb="20px">
        <Icon as={icon4}/>
        <Text>30 days money back guarantee</Text>
        </HStack>

        <HStack mb="20px">
        <Icon as={icon2}/>
        <Text>No setup fees 
            100% hassle-free
        </Text>
        </HStack>

        <HStack mb="20px">
        <Icon as={Icon3}/>
        <Text>No monthly subscription pay once and for all</Text>
        </HStack></Flex>
    </Box>
  )
}
