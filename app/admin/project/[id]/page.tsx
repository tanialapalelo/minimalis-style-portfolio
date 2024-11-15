import { Project } from "@/components/Project";
import { getProjectById } from "@/lib/actions/project.action";
import { Button } from "@mantine/core";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const result = await getProjectById(params.id);
  return (
    <div>
      <Button component={Link} href="/admin/project" color="grape">Back</Button>
      <Project projectDetail={JSON.stringify(result)} />
    </div>
  );
};

export default Page;
