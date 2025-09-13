
import { Metadata } from 'next';
import Layout from '../../layout/layout';


interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'ADMIN TGO',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'ADMIN TGO',
        description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
        ttl: 604800
    },
    icons: {
        icon: '/favicon_cbam.ico'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
