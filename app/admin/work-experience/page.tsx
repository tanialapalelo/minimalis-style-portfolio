import TableWorkExperience from "@/components/TableWorkExperience";
import { getAllWorkExperience } from "@/lib/actions/work-experience.action";

const WorkExperience = async () => {
  const results = await getAllWorkExperience();

  // Ensure the data is serializable
  const workExperiences = results.map((experience) => ({
    id: experience.id.toString(),
    jobTitle: experience.jobTitle,
    company: experience.company,
    description: experience.description,
    startDate: experience.startDate,
    endDate: experience.endDate,
  }));

  return (
    <>
      <TableWorkExperience elements={workExperiences} />
    </>
  );
};

export default WorkExperience;
