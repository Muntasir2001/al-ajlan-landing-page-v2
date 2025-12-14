import { cn } from "@/lib/utils";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full px-5 md:px-24", className)}>{children}</div>
  );
};

export default Layout;
