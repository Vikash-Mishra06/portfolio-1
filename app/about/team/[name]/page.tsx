import React from 'react'

const TeamDetailsPage = async ({params}) => {
    const name = (await params).name
  return (
    <div className='text-white'>Team {name}'s </div>
  )
}

export default TeamDetailsPage