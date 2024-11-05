import { WorkExperience } from "@/components/WorkExperienceAdmin";
import { getWorkExperienceById } from "@/lib/actions/work-experience.action";
import { Button } from "@mantine/core";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const result = await getWorkExperienceById(params.id);
  return (
    <div>
      <Link href="/admin/project">
        <Button color="gray" variant="filled">Back</Button>
      </Link>
      <WorkExperience projectDetail={JSON.stringify(result)} />
    </div>
  );
};

export default Page;
