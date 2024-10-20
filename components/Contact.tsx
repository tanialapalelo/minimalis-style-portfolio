"use client"
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Autocomplete, Loader } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export function Contact() {
  const [data, setData] = useState<string[]>([]);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  
  const handleChange = (val: string) => {
    window.setTimeout(() => {
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 2000);
  };

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          {...form.getInputProps('name')}
        />
         <Autocomplete
          data={data}
          onChange={handleChange}
          // rightSection={loading ? <Loader size="1rem" /> : null}
          label="Email"
          placeholder="Your email"
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type='submit' color="rgba(0, 0, 0, 1)" size="md">
            Send message
          </Button>
      </Group>
    </form>
  );
}