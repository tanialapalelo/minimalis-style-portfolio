import { Timeline } from "@/components/ui/timeline";

const WorkExperience = () => {
  const data = [
    {
      title: (
        <div className="p-10 text-center border-2 boder-black w-full h-full md:w-full bg-yellow-200">
          1
        </div>
      ),
      content: (
        <div>
          <p>Design intern at Google</p>
          <p>Worked on design system at Material 3 designs</p>
          <p className="font-normal">20, April 2021</p>
        </div>
      ),
    },
    {
      title: (
        <div className="p-10 text-center border-2 boder-black w-full h-full md:w-full bg-purple-200">
          2
        </div>
      ),
      content: (
        <div>
          <p>Sr. UI/UX Designer at Microsoft</p>
          <p>Worked on design system at Material 3 designs</p>
          <p className="font-normal">20, April 2022</p>
        </div>
      ),
    },
    {
      title: (
        <div className="p-10 text-center border-2 boder-black w-full h-full md:w-full bg-green-200">
          3
        </div>
      ),
      content: (
        <div>
          <p>Software Engineer at SASS Startup</p>
          <p>Worked on design system at Material 3 designs</p>
          <p className="font-normal">20, April 2023</p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative my-10 mx-auto max-w-3xl">
      <Timeline data={data} />
    </div>
  );
};

export default WorkExperience;
