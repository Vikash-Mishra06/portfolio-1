import Image from 'next/image'
import React from 'react'
import { Layout, Server, Sparkles, Cloud } from "lucide-react";

type Props = {
    icon: string,
    name: string,
    description: string,
}

const ServicesCard = ({description, icon, name}: Props) => {
  return (
    <div>
        <div>{icon}</div>
        <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-300'>{name}</h1>
        <p className='mt-6 text-gray-400'>{description}</p>
    </div>
  )
}

export default ServicesCard