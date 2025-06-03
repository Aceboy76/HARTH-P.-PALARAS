import { Button } from "@/components/ui/button"
import FooterLayout from "./layout"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const contacts = [
    {
      icon: "/mobile.svg",
      href: "tel:+639185564553",
      label: "+639185564553",
    },
    {
      icon: "/facebook.svg",
      href: "https://www.facebook.com/harth.palaras",
      label: "https://www.facebook.com/harth.palaras",
      external: true,
    },
    {
      icon: "/email.svg",
      href: "mailto:harthpalaras62@gmail.com",
      label: "harthpalaras62@gmail.com",
      external: true,
    },
    {
      icon: "/linkedin.svg",
      href: "https://www.linkedin.com/in/harth-palaras-b38b14363",
      label: "https://www.linkedin.com/in/harth-palaras-b38b14363",
      external: true,
    },
  ]

  return (
    <FooterLayout>
      <div
        id="contact"
        className="h-fit py-2 space-y-8 flex flex-col items-center lg:items-start"
      >
        <div>
          <p className="text-4xl font-syne text-center lg:text-left">
            Contact me
          </p>
        </div>
        <div className="px-4 w-full max-w-md space-y-5 mx-auto">
          {contacts.map(({ icon, href, label, external }) => (
            <div key={href} className="flex items-center space-x-3">
              <Image src={icon} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate max-w-xs text-left"
                >
                  <Button variant="link" className="text-lg font-rubik truncate">
                    {label}
                  </Button>
                </a>
              ) : (
                <Link href={href}>
                  <Button variant="link" className="text-lg font-rubik truncate max-w-xs text-left">
                    {label}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </FooterLayout>
  )
}
