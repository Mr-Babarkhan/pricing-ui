import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Practice() {
  return (
    <div>
        <>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <Heading>heading of chakra ui</Heading>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio natus ea ullam obcaecati necessitatibus, magnam dolorum placeat sunt aperiam, consequuntur cum tempore nihil minima quisquam officia dicta pariatur esse.</Text>
        <Heading as="h2" color={'red'} fontSize="30px">heading of h2</Heading>
        </>
    </div>
  )
}
