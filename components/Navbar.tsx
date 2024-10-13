"use client";

import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

import React from "react";
import Theme from "./Theme";
import Link from "next/link";
import { navigationOption } from "@/constants";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <div className="flex">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <p className="font-bold ml-4 text-lg">Tania</p>
          </div>

          <Theme />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navigationOption
          .map((navOption, index) => (
            // <Skeleton key={index} h={28} mt="sm" animate={false} />
            <Link href="" key={index}>{navOption.value}</Link>
          ))}
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
};

export default Navbar;
