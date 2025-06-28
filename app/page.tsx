import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import React from 'react'

const Page = async () => {
  const companions= await getAllCompanions({limit:3});
  const recentSessionsCompanions= await getRecentSessions({limit:10})
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className=' home-section'>
        <CompanionCard 
        id="123"
        name="Verba the Vocabulary Builder"
        topic="English Literature"
        subject="Language"
        duration={45}
        color="#ffda6e"
        />
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
          companions={recentSessions}
          classNames=" w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page