// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
"use client";
import { ChakraProvider, Heading, Image, Text } from '@chakra-ui/react'
import { Icon1 } from './components/features';

// import { CheckmarkIcon } from './components/CheckmarkIcon';
import { Header } from './components/Header';
import { Pricing } from './components/Pricing';
import Practice from './practice';


export default function Home() {
  return (
    
      <ChakraProvider>
      {/* <Practice/>    */}
       <Header/>
       <Pricing/>
      <Icon1/>
         </ChakraProvider>
  )
}
