import { DocLayout } from '@/components/developers/DocLayout';

export default function DevelopersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DocLayout>{children}</DocLayout>;
}
