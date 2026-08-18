import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/utils/constants";

export const useHeader = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const hamburgerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)")

        const handleChange = () => {
            if (media.matches) {
                setMenuVisible(false)
            }
        }

        media.addEventListener("change", handleChange)

        return () => {
            media.removeEventListener("change", handleChange)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const ids = NAV_LINKS.map((link) => link.href.replace("#", ""))
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id)
                }
            },
            {
                rootMargin: "-45% 0px -50% 0px",
                threshold: 0,
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (menuVisible) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                window.scrollTo(0, scrollY);
            };
        }
    }, [menuVisible]);

    const toggleMenu = () => {
        setMenuVisible(v => !v)
    }

    return {
        menuVisible,
        scrolled,
        activeSection,
        hamburgerRef,
        actions: {
            toggleMenu,
        },
    }
}
