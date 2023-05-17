import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { RecoilState,RecoilValue } from 'recoil'
import { productState } from '@/atoms/productsAtom'

interface Props {
    children: React.ReactNode
    
}



const Layout = ({children}: Props) => {

  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout