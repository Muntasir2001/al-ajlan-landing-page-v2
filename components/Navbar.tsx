import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="w-full bg-white px-24 py-6 flex items-center justify-between md:flex-row flex-col">
      <h1 className="text-2xl font-extrabold uppercase text-black">
        AlAjlan & AlHusaiyin
      </h1>

      <div className="flex items-center gap-12">
        <NavbarLink href="/" label="Our Practice Areas" />
        <NavbarLink href="/about" label="About Us" />
        <NavbarLink href="/services" label="Publications" />
        <NavbarLink href="/contact" label="Our Team" />
        <NavbarLink href="/contact" label="Contact Us" />
      </div>
    </div>
  );
};

export default Navbar;
