export const dynamic = "force-dynamic";
import CompanionComponent from "@/components/CompanionComponent";
import { getCompanion } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface CompanionSessionpageProps{
  params: Promise<{id: string}>;
}

// params: /url/{id}
// searchParams: /url?key=value&key2=value2

const CompanionSession = async ({params}: CompanionSessionpageProps) => {
  const {id}= await params;
  const companion = await getCompanion(id);
  const user = await currentUser();
  const {name, subject, topic, duration}= companion;
  if(!user) redirect('/sign-in');
  if(!companion) redirect('/companions');

  return (
    <main>
      <article className=" flex rounded-border justify-between p-6 max-md:flex-col">
      <div className=" flex items-center gap-2">
        <div className=" size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={
          {backgroundColor: getSubjectColor(subject)}
        }>
          <Image src={`/icons/${subject}.svg`}  alt={subject} width={35} height={35} />
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className=" font-bold text-2xl">
              {name}
            </p>
            <div className=" subject-badge max-sm:hidden">
              {subject}
            </div>
          </div>
          <p className="text-lg">
            {topic}
          </p>
        </div>
      </div>
      <div className=" items-center text-2xl max-md:hidden">
        {duration} minutes
      </div>

      </article>
      <CompanionComponent {...companion}
       companionId={id}
       useName={user.firstName!}
       userImage={user.imageUrl!}
      />
    </main>
  )
}

export default CompanionSession
