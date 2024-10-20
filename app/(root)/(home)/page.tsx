"use client";

import { Button, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";
import { featured, specialties } from "@/constants";
import { Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Contact } from "@/components/Contact";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  const imageVariants = { 
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

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
        <Text className="font-handlee">Tania</Text>
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
      <Text
        className="font-handlee bg-pink-300 dark:bg-red-600 w-fit"
        mt={"xl"}
        fw={700}
      >
        What I do?
      </Text>
      <Image
        src="/assets/icons/arrow.svg"
        alt="arrow"
        width={50}
        height={50}
        className="-rotate-80 my-8"
      />
      <div className="flex">
        {specialties.map((specialty, idx) => {
          return (
            <motion.div
              variants={imageVariants}
              key={"images-first" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className={`rounded-xl -mr-4 mt-4 p-1 border flex-shrink-0 overflow-hidden bg-${specialty.color}-500 border-${specialty.color}-200`}
            >
              <div
                className={`rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 bg-${specialty.color}-100`}
              >
                <Image src={specialty.icon} alt="icon" width={50} height={50} />
                <Text size="xl" m={"lg"}>{specialty.value}</Text>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex mt-12">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <Text
              className="font-handlee bg-pink-300 dark:bg-red-600 w-fit"
              mt={"xl"}
              fw={700}
            >
              Featured Projects
            </Text>
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
                    header={<Image src={item.image} alt={item.name} width={250} height={250} className="object-cover w-full" />}
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
            <Text
              className="font-handlee bg-pink-300 dark:bg-red-600 w-fit"
              mt={"xl"}
              fw={700}
            >
              Work Experience
            </Text>
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
            <WorkExperience/>
          </Grid.Col>
        </Grid>
      </div>


      <div className="flex mt-12 w-full">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <Text
              className="font-handlee bg-pink-300 dark:bg-red-600 w-fit"
              mt={"xl"}
              fw={700}
            >
              Contact here
            </Text>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="-rotate-80 my-8"
            />
            <Text>Have a project idea? just say me Hi.</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            <Contact />
          </Grid.Col>
        </Grid>
      </div>

    </div>
  );
}
