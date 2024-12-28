import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <div className='max-w-8xl mx-auto mt-20 sm:mt-40 flex flex-col md:flex-row items-center justify-center gap-8 px-4'>
      <Image src={'/images/mail.png'} alt={'Just an image of a happy cat'} height={300} width={300} className="md:w-auto md:h-auto" />
      <div className='flex flex-col gap-4 md:gap-8 text-center md:text-left'>
        <p>
          For speaking engagements and professional opportunities, please get in touch at the email below.
        </p>
        <p className='underline text-blue-800'>
          <a href="mailto:sgote@ucsc.edu">sgote@ucsc.edu</a>
        </p>
      </div>
    </div>
  )
}

export default Page