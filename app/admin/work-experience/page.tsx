import TableWorkExperience from "@/components/TableWorkExperience";
import { getAllWorkExperience } from "@/lib/actions/work-experience.action";
import { Button, Title } from "@mantine/core";
import Link from "next/link";

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
      <div className="flex justify-between">
        <Title order={2} mb={"md"}>
          List of Work Experience
        </Title>
        <Button component={Link} href="/admin/work-experience/add-work-experience">
          Add Work Experience
        </Button>
      </div>
      <TableWorkExperience elements={workExperiences} />
    </>
  );
};

export default WorkExperience;
