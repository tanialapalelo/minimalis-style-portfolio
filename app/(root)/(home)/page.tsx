"use client";

import { Button, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import { featured } from "@/constants";
import { Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Contact } from "@/components/Contact";
import WorkExperience from "@/components/WorkExperience";
import Specialties from "@/components/Specialties";

export default function Home() {

  return (
    <div className="mx-7">
      <div className="flex">
        <Image src="/assets/icons/me.svg" alt="me" width={50} height={50} />
        <Image
          src="/assets/icons/arrow.svg"
          alt="arrow"
          width={50}
          height={50}
        />
        <Text className="font-handlee" fw={"bold"} size="xl">Tania</Text>
      </div>
      <Grid className="gap-9">
        <Grid.Col span={{ base: 12, lg: 7 }} className="flex flex-col">
          <Title order={1}>
            I build <Highlight>top notch websites</Highlight>
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 5 }} mt={"md"} className="">
          <Text>
            I&apos;ll design your website and will develop to land it on
            internet using No-code.
          </Text>
          <Button variant="filled" color="rgba(0, 0, 0, 1)" mt={"xs"}>
            Hire me
          </Button>
        </Grid.Col>
      </Grid>

      <Specialties/>

      <div className="flex mt-12">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <p className="font-handlee bg-pink-300 font-bold mt-7 text-black w-fit">
              Featured Projects
            </p>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="-rotate-80 my-8"
            />
            <Text>Have designed morethan 20 projects</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            <BentoGrid className="max-w-4xl mx-auto">
              {featured.map((item) => {
                return (
                  <BentoGridItem
                    key={item.id} // Always include a unique key when mapping over elements
                    title={item.name}
                    header={
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={250}
                        height={250}
                        className="object-cover w-full"
                      />
                    }
                    className={cn("[&>p:text-lg] border-2 border-black")}
                  />
                );
              })}
            </BentoGrid>
          </Grid.Col>
        </Grid>
      </div>

      <div className="flex mt-12">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <p
              className="font-handlee bg-pink-300 font-bold mt-7 text-black w-fit"
              mt={"xl"}
              fw={700}
            >
              Work Experience
            </p>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="-rotate-80 my-8"
            />
            <Text>Have designed morethan 20 projects</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            <WorkExperience />
          </Grid.Col>
        </Grid>
      </div>

      <div className="md:mt-12 w-full">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <p className="font-handlee bg-pink-300 w-fit font-bold mt-7 text-black">
              Contact here
            </p>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="-rotate-80 my-8"
            />
            <Text>Have a project idea? just say me Hi.</Text>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 8, lg: 8 }}
            className="justify-center"
          >
            <Contact />
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
