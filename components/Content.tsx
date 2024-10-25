"use client";

import { Anchor, AppShell, Burger, Container, Group, NavLink, useComputedColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

import { useState } from "react";
import Theme from "./Theme";
import { links, navigationOption } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from '@/lib/Footer.module.css'

const Content = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

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

          <Link href="/" className="flex">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <p className="font-bold ml-4 text-xl font-handlee my-auto">Tania</p>
          </Link>

          <Theme />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navigationOption
          .map((navOption, index) => (
            <NavLink
              href={navOption.path}
              key={navOption.value}
              active={navOption.path === pathname}
              label={navOption.value}
              description={navOption.description}
              onClick={() => setActive(index)}
              color="dark"
              variant="filled"

            />
          ))}
      </AppShell.Navbar>
      <AppShell.Main className={`${computedColorScheme === 'light' ? 'bg-dot-black/[0.5]' : 'bg-dot-white/[0.5]'}`}>{children}</AppShell.Main>
      {/* <AppShell.Footer>
        <div className={classes.footer}>
          <Container className={classes.inner}>
            <Group className={classes.links}>{items}</Group>
          </Container>
        </div>
      </AppShell.Footer> */}
    </AppShell>
  );
};

export default Content;
