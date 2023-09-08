'use client'
import MountedClient from "./components/MountedClient"
import Navbar from "./components/navbar/Navbar"
import {Nunito} from 'next/font/google'
import Modal from "./components/navbar/modals/Modal"

const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({children} : {children: React.ReactNode}) => {
  return (
   <html lang="en">
        <body className={newFont.className}>
            <MountedClient>
            <Modal isOpen onSumbit={() => {}} onClose={() => {}} btnLabel="Register" title="Register"/>
            <Navbar/>
            </MountedClient>
            {children}
        </body>
   </html>
  )
}

export default RootLayout
