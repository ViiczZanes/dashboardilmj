"use client"

import { Languages } from "lucide-react"

import { Button } from "../ui/button"


import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Link from "next/link"


const LanguageToggle = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-muted-foreground">
                <Languages className="h-[1.2rem] w-[1.2rem]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem >
                    <Link href="/pt/dashboard">
                        Português
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    <Link href="/en/dashboard">
                        English
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageToggle