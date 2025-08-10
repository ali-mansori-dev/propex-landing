import React from 'react'
import TrustLogo from '@/public/logo.svg'
import Image from 'next/image'

const TrustPilot = () => {
  return (
    <div className="inline-flex gap-3 items-center">
      <Image src={TrustLogo} alt='trustpilot' height={8} className='w-[125px] !h-[25px] object-cover' />
    </div>
  );
}

export default TrustPilot