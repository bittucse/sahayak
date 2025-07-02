import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions= await getAllCompanions({limit:3});
  const recentSessionsCompanions= await getRecentSessions({limit:10});
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className=' home-section'>
        {companions.map((companion)=>(
          <CompanionCard 
        key={companion.id}
        {...companion}
        color={getSubjectColor(companion.subject)}
        />
        ))}
        {/* <CompanionCard
        id="456"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="Science"
        duration={30}
        color="#e5d0ff"
        />
        <CompanionCard
        id="789"
        name="Countsy the Number Wizard"
        topic=" Derivatives & Integrals"
        subject="Maths"
        duration={35}
        color="#BDE7FF"
         /> */}
      </section>
      <section className='home-section'>
        <CompanionsList 
          title="Recent completed Sessions"
          companions={recentSessionsCompanions}
          classNames=" w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page