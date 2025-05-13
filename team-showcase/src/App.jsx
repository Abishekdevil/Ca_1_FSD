import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  const card=[
    {name:"Abishek",title:"Game developer"},
    {name:"Shankar",title:"Frontend developer"},
    {name:"Thamizh",title:"Backend developer"}
  ]
  return (
    <div>
      {
        card.map((i,index)=>(
          <TeamMemberCard key={index} name={i.name} title={i.title}/>
        ))
      }
    </div>
  )
}

export default App
