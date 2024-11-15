"use client";
import { TextInput, Textarea, SimpleGrid, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { usePathname, useRouter } from "next/navigation";
import { DatePickerInput, DatesProvider } from "@mantine/dates";
import { createWorkExperience, editWorkExperience } from "@/lib/actions/work-experience.action";

interface WorkExpProps {
  type?: string;
  workExpDetail?: string;
}

export function WorkExperience({ type, workExpDetail }: WorkExpProps) {
  const parsedWorkExpDetail = workExpDetail && JSON.parse(workExpDetail || "");

  const pathname = usePathname(); // to know which url are we on now
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      jobTitle: parsedWorkExpDetail?.jobTitle || "",
      company: parsedWorkExpDetail?.company || "",
      startDate: parsedWorkExpDetail?.startDate
        ? new Date(parsedWorkExpDetail.startDate)
        : new Date(),
      endDate: parsedWorkExpDetail?.endDate
        ? new Date(parsedWorkExpDetail.endDate)
        : new Date(),
      description: parsedWorkExpDetail?.description || "",
    },
    validate: {
      jobTitle: (value) =>
        value.trim().length < 1 ? "Job Title is too short" : null,
      company: (value) =>
        value.trim().length < 1 ? "Company is too short" : null,
      startDate: (value) =>
        value instanceof Date ? null : "Invalid start date",
      endDate: (value) =>
        value instanceof Date ? null : "Invalid end date",
      description: (value) =>
        value.trim().length < 2 ? "Description is too short" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log("Form values work:", values);
    if (type === "edit") {
      await editWorkExperience({
        workExperienceId: parsedWorkExpDetail._id,
        jobTitle: values.jobTitle,
        description: values.description,
        company: values.company,
        startDate: values.startDate,
        endDate: values.endDate,
        path: pathname,
      });
      router.push(`/admin/work-experience/${parsedWorkExpDetail._id}`);
    } else {
      await createWorkExperience({
        jobTitle: values.jobTitle,
        company: values.company,
        startDate: values.startDate,
        endDate: values.endDate,
        description: values.description,
        path: pathname,
      });
      // router.push("/admin/work-experience/");
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Job Title"
        placeholder="Job Title"
        name="jobTitle"
        {...form.getInputProps("jobTitle")}
      />
      <TextInput
        label="Company"
        placeholder="Company"
        name="company"
        {...form.getInputProps("company")}
      />

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <DatesProvider settings={{ consistentWeeks: true, timezone: "UTC" }}>
          <DatePickerInput
            label="Start Date"
            placeholder="Pick start date"
            {...form.getInputProps("startDate")}
          />
          <DatePickerInput
            label="End Date"
            placeholder="Pick end date"
            {...form.getInputProps("endDate")}
          />
        </DatesProvider>
      </SimpleGrid>
      <Textarea
        mt="md"
        label="Description"
        placeholder="Your description"
        maxRows={10}
        minRows={5}
        autosize
        name="description"
        {...form.getInputProps("description")}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" color="rgba(0, 0, 0, 1)" size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
}
