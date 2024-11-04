import TableProjects from "@/components/TableProjects";
import { getAllWorkExperience } from "@/lib/actions/work-experience.action";

const WorkExperience = async () => {
  const results = await getAllWorkExperience();
  
  // Ensure the data is serializable
  const workExperiences = results.map((experience) => ({
    id: experience.id.toString(),
    jobTitle: experience.jobTitle,
    description: experience.description,
  }));


  return (
    <>
    {/* <TableProjects elements={workExperiences}/> */}
    </>
  );
};

export default WorkExperience;
