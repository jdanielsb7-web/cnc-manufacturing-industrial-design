import { forwardRef } from "react";

type HamburgerButtonProps = {
  open: boolean;
  toggleMenu: () => void
};

export const HamburgerButton = forwardRef<
  HTMLButtonElement,
  HamburgerButtonProps
>(({ open, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className="relative flex items-center justify-center cursor-pointer
                 w-7 h-7 lg:hidden
                 text-[#EDE9DD] hover:text-white
                 transition-all duration-300"
    >
      <span
        className={`
          absolute bg-current transition-all duration-300
          h-0.5 w-6
          ${open ? "rotate-45" : "-translate-y-2 xl:-translate-y-2"}
        `}
      />

      <span
        className={`
          absolute bg-current transition-all duration-300
          h-0.5 w-6
          ${open ? "opacity-0" : "opacity-100"}
        `}
      />

      <span
        className={`
          absolute bg-current transition-all duration-300
          h-0.5 w-6
          ${open ? "-rotate-45" : "translate-y-2 xl:translate-y-2"}
        `}
      />
    </button>
  );
});

HamburgerButton.displayName = "HamburgerButton";
