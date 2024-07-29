"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"


export type Payment = {
    id: string
    media: number
    indicadores: number
    atributosEVP: string
}

export const columnsAtributosGeral: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "atributosEVP",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Atributos EVP
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("atributosEVP")}</div>,
    },
    {
        accessorKey: "indicadores",
        header: "Indicadores",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("indicadores")}</div>
        ),
    },
    {
        accessorKey: "media",
        header: "Media",
        cell: ({ row }) => (
            <div className="capitalize bg-green-300 flex justify-center items-center rounded-lg  ">
                <span className="text-green-600">{row.getValue("media")}</span>
            </div>
        ),
    },
]