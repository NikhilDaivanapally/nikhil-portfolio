import Link from "next/link";
import AppNavigation from "./AppNavigation";

const AppHeader = () => {
  return (
    <header className="main-layout h-14 md:h-16 sticky top-0 z-50 font-mono transition-all duration-300 border-b bg-background">
      <div className="flex h-full justify-between items-center">
        {/* LOGO */}
        <Link href={"/"} className="font-monomaniac text-center text-2xl">
          - ND -
          <p className="font-playwrite text-xs text-muted-foreground">
            Nikhil Daivanpally
          </p>
        </Link>

        {/* NAVIGATION */}
        <AppNavigation />
      </div>
    </header>
  );
};

export default AppHeader;
