import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Form from './components/Form'
import { VStack } from '@chakra-ui/react'
import HeaderText from './components/Typography'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Result.io</title>
        <meta name="description" content="Convert your code to any programming language." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w='100%'>
        <HeaderText title="Result.io" />
        <Form />
      </VStack>
    </>
  )
}
