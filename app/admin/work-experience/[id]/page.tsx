import { WorkExperience } from "@/components/WorkExperienceAdmin";
import { getWorkExperienceById } from "@/lib/actions/work-experience.action";
import { Button } from "@mantine/core";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const result = await getWorkExperienceById(params.id);
  return (
    <div>
      <Button component={Link} href="/admin/project" color="grape">
        Back
      </Button>

      <WorkExperience type="edit" workExpDetail={JSON.stringify(result)} />
    </div>
  );
};

export default Page;
