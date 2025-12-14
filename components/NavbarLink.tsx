import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink = ({ href, label }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className="text-base text-black hover:text-primary hover:underline"
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
