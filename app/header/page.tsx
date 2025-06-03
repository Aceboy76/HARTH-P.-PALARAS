"use client"

import { Button } from "@/components/ui/button"
import HeaderLayout from "./layout"

export default function Header() {
  function scrollToView(sectionID: string) {
    const el = document.getElementById(sectionID)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <HeaderLayout>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
        <div className="text-3xl font-syne font-bold">HPP</div>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { label: "Home", id: "welcome" },
            { label: "About", id: "about" },
            { label: "Tech", id: "tech" },
            { label: "Project", id: "project" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <Button
              key={id}
              variant="link"
              className="text-base font-medium"
              onClick={() => scrollToView(id)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </HeaderLayout>
  )
}
