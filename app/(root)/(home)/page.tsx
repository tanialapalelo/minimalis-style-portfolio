"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";
import { specialties } from "@/constants";
import { Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
            I design <Highlight>top notch websites</Highlight>
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
      <Text
        className="font-handlee bg-pink-300 dark:bg-red-600 w-fit"
        mt={"xl"}
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
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {[5].map((item) => {
          return (
            <BentoGridItem
              key={item} // Always include a unique key when mapping over elements
              title="tes"
              description="tes"
              header="tes"
              className={cn("[&>p:text-lg] border-2")}
              icon="tes"
            />
          );
        })}

        
    </BentoGrid>

    </div>
  );
}
