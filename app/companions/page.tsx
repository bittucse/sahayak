// this shows all the info about the created companions

import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async({searchParams}:SearchParams) => {
  const filter= await searchParams; // This will be the search params passed to the page serachParams is a Next.js feature that allows you to access the query parameters in the URL.

  const subject=filter.subject? filter.subject : '';
  const topic=filter.topic? filter.topic : '';

  const companions= await getAllCompanions({subject, topic});

  console.log("Companions:", companions);
  return (
    <main>

    <section className=" flex justify-between gap-4 max-sm:flex-col">
      <h1>Companions Library</h1>
      <div className=" flex gap-4"> 
        <SearchInput/>
        <SubjectFilter/>
      </div>
    </section>
    <section className="companions-grid">
      {companions.map((companion)=>(
        <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>

      ))}
    </section>
    </main>
  )
}

export default CompanionsLibrary
