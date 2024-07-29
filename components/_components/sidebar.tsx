'use client'
import Link from "next/link"
import {
  GitCompareArrows,
  LayoutDashboard,
  LineChart,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import { usePathname } from "next/navigation"
import LanguageToggle from "./language-toggler"

const Sidebar = () => {

  const pathname = usePathname()

  function isActive(path: string) {
    return pathname === path
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="https://www.ilovemyjob.com.br"
          className={`group mb-5 mt-5 flex h-9 w-9 shrink-0 items-center justify-center gap-5 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base`}
        >
          <Image className="h-16 w-16 transition-all group-hover:scale-110" src={"/log.webp"} width={50} height={50} alt="Logo IloveMyJob" />
          <span className="sr-only">IloveMyJob</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/pt/dashboard"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive("/dashboard") ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/pt/dashboard/atributos"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive("/dashboard/atributos") ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Atributos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Atributos</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/pt/dashboard/comparativo"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive("/dashboard/comparativo") ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
              >
                <GitCompareArrows className="h-5 w-5" />
                <span className="sr-only">comparativo</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">comparativo</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <LanguageToggle />
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}

export default Sidebar