'use client'

import React from 'react'
import InvestmentPhilosophy from './InvestmentPhilosophy'
import InvestmentProcess from './InvestmentProcess'
import ClientLogos from '../ClientLogo'

const Hero = () => {
  return (
    <>
        <section id="about-us" className="bg-gradient-to-tr from-slate-900 to-slate-600">
               
                        <InvestmentPhilosophy />
            </section>
            <InvestmentProcess />
            <ClientLogos />
    </>
  )
}

export default Hero