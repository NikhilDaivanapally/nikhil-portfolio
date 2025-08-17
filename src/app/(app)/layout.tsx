import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import PagePattern from "@/components/profile/PagePattern";
import Providers from "@/components/providers/Providers";
import { ScrollTop } from "@/components/ScrollTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <PagePattern /> {/* Background box pattern*/}
        <AppHeader />
        {children}
        <AppFooter />
        {/* Scroll Top Comp */}
        <ScrollTop />
      </Providers>
    </>
  );
}
