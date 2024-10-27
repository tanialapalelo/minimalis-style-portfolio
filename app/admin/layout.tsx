import AdminContent from "@/components/AdminContent";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AdminContent>{children}</AdminContent>
    );
}
