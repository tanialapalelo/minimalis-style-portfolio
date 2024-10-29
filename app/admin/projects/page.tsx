import TableProjects from "@/components/TableProjects";
import { getAllProject } from "@/lib/actions/project.action";

const Projects = async () => {
  const results = await getAllProject();
  return (
    <>
    <TableProjects elements={results}/>
    </>
  );
};

export default Projects;
