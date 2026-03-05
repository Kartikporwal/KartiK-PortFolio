import React from 'react'

import Card from './Card'
import { Car } from 'lucide-react'

const Page3Content = ({skills}) => {
  return (
    <div className='w-full'>
     <Card skills={skills}/>
    </div>
  )
}

export default Page3Content
