import React from 'react'

const InvestmentProcess = () => {
    const investmentProcess = [
        {topic: "Economic Outlook", num: `01.` , content:"Assess the macro situation that might impact the stock market and economy at large"},
        {topic: "Industry Analysis", num: `02.` , content:"Understand the sector sesonality, analyze forces that affect competitive landscape"},
        {topic: "Company Research", num: `03.` , content:"Identity companies with wide economic moats that can compound theor earnings in the long run by enlarging operating leverage"},
        {topic: "Asset Allocation", num: `04.` , content:"Build portfolio with Strategic Asset Allocation using 'Investment Philosophy' to maximize portfolio returns,minimize risk factors"},
        {topic: "Monitoring & Rebalancing", num: `05.` , content:"Monitor investment regularly and periodically rebalance asset allocation to adapt to contingencies"}
    ]
  return (
    <>
    <section className='bg-slate-300 py-10 my-20'>
    <div className='flex xsm:flex-col xsm:items-center xl:flex-row xl:max-w-7xl xl:justify-between xl:mx-auto py-10'>
                            <div className='xl:w-1/2 xsm:mb-12 xl:mb-0 xsm:text-center xl:text-left'>
                            <span className='block xsm:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-eastern-blue-700 mb-5'>Our</span>
                    <span className='block xsm:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-eastern-blue-700 mb-5'>Investment</span>
                    <span className='2xl:text-7xl xl:text-6xl xsm:text-5xl font-semibold text-eastern-blue-700 mb-10'>Process</span>
                    <p className='xsm:text-2xl xsm:text-center xl:text-left xsm:mx-auto xl:mx-0 2xl:text-3xl xsm:w-3/4 xl:w-2/3 mt-20 leading-[3rem] text-slate-600'>Here is the investment process that investors follow to make informed decisions about allocating capital in financial markets.</p>
                            </div>
                            <div className='space-y-8 w-1/2'>
                            {
                                investmentProcess.map(invest => (
                                    <div key={invest.num}> 
                                    <p className='xsm:text-3xl 2xl:text-5xl mb-5 text-eastern-blue-700'><span className=''>{invest.num}</span>{invest.topic}</p>
                                    <p className='xsm:text-xl 2xl:text-3xl font-light'>
                                        {invest.content}
                                    </p>
                                    </div>
                                ))
                            } 
                            </div>
         </div>
         </section>
    </>
  )
}

export default InvestmentProcess