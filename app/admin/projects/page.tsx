import TableProjects from "@/components/TableProjects";
import { getAllProject } from "@/lib/actions/project.action";

const Projects = async () => {
  const results = await getAllProject();
  
  // Ensure the data is serializable
  const projects = results.map((project) => ({
    id: project.id.toString(),
    title: project.title,
    description: project.description,
    url: project.url,
    codeUrl: project.codeUrl,
    imageUrl: project.imageUrl,
    isFeatured: project.isFeatured,
  }));


  return (
    <>
    <TableProjects elements={projects}/>
    </>
  );
};

export default Projects;
