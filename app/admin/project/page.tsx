import TableProjects from "@/components/TableProjects";
import { getAllProject } from "@/lib/actions/project.action";
import { Button, Title } from "@mantine/core";
import Link from "next/link";

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
      <div className="flex justify-between">
        <Title order={2} mb={"md"}>
          List of Projects
        </Title>
        <Link href="/admin/project/add-project">
          <Button>Add Project</Button>
        </Link>
      </div>

      <TableProjects elements={projects} />
    </>
  );
};

export default Projects;
