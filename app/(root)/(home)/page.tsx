"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Button,
  Grid,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";
import { specialties } from "@/constants";

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
        <Grid.Col span={8} className="flex flex-col">
          <TextGenerateEffect
            duration={2}
            words="I design top notch websites"
          />
        </Grid.Col>
        <Grid.Col span={4} mt={"md"}>
          <Text>
            I&apos;ll design your website and will develop to land it on
            internet using No-code.
          </Text>
          <Button variant="filled" color="rgba(0, 0, 0, 1)" mt={"xs"}>Hire me</Button>
        </Grid.Col>
      </Grid>
      <Text>What I do?</Text>
      <Image
          src="/assets/icons/arrow.svg"
          alt="arrow"
          width={50}
          height={50}
          className="-rotate-80 my-8"
        />
        <div className="flex">

        {specialties.map((specialty, idx) =>(
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
          <div className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 bg-pink-300">
            <Text size="xl">{specialty.value}</Text>
          </div>
        </motion.div>
        ))}
        </div>
        
    </div>
  );
}
