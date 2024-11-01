import { Project } from "@/components/Project";
import { getProjectById } from "@/lib/actions/project.action";
import { Button } from "@mantine/core";
import Link from "next/link";

const Page = async ({ params, searchParams }: any) => {
  const result = await getProjectById(params.id);
  return (
    <div>
      <Link
        href="/admin/projects"
        className="my-5 w-fit"
      >
        <Button size="md" color="gray">
          Back
        </Button>
      </Link>
      <Project projectDetail={JSON.stringify(result)} />
    </div>
  );
};

export default Page;
