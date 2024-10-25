import Content from "@/components/Content";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Content>{children}</Content>
    );
}
