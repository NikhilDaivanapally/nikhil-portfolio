import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PageNotFound = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "flex h-full font-mono flex-col items-center justify-center gap-6",
        className
      )}
    >
      <p className="font-monomaniac text-8xl">404</p>
      <Button asChild>
        <Link href={"/"} className="flex gap-1">
          Go to Home
          <ArrowRightIcon className="size-4" />
        </Link>
      </Button>
    </div>
  );
};

export default PageNotFound;
