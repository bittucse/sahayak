export const dynamic = "force-dynamic";
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <main className=' flexx justify-center items-center'>
    <SignIn />
    </main>
}