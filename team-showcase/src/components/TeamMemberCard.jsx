import React from 'react'

function TeamMemberCard({name,title}) {
  return (
    <div>
      <h2><strong>Name:</strong>{name}</h2>
      <h4><strong>Job :</strong>{title}</h4>
    </div>
  )
}

export default TeamMemberCard
