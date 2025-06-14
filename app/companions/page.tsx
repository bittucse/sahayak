// this shows all the info about the created companions

import { getAllCompanions } from "@/lib/actions/companion.action";

const CompanionsLibrary = async({searchParams}:SearchParams) => {
  const filter= await searchParams; // This will be the search params passed to the page serachParams is a Next.js feature that allows you to access the query parameters in the URL.

  const subject=filter.subject? filter.subject : '';
  const topic=filter.topic? filter.topic : '';

  const companions= await getAllCompanions({subject, topic});

  console.log("Companions:", companions);
  return (
    <section className=" flex justify-between gap-4 max-sm:flex-col">
      <h1>Companions Library</h1>
      <div className=" flex gap-4"> fliters</div>
    </section>
  )
}

export default CompanionsLibrary
