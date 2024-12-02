import TableContactSubmission from "@/components/TableContactSubmission";
import { getAllContact } from "@/lib/actions/contact-submission.action";
import { Button, Title } from "@mantine/core";
import Link from "next/link";

const ContactSubmission = async () => {
  const results = await getAllContact();

  // Ensure the data is serializable
  const contacts = results.map((contact) => ({
    id: contact.id.toString(),
    name: contact.name,
    subject: contact.subject,
    message: contact.message,
    email: contact.email,
    createdAt: contact.createdAt,
  }));

  return (
    <>
      <div className="flex justify-between">
        <Title order={2} mb={"md"}>
          List of Contact Submission
        </Title>
      </div>

      <TableContactSubmission elements={contacts} />
    </>
  );
};

export default ContactSubmission;
