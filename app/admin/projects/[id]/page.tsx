import { Project } from "@/components/Project"


const Page = async ({ params, searchParams }: any) => {
  return (
    <div>
      <p>{params.id}</p>
      <Project/>
    </div>
    
  )
}

export default Page