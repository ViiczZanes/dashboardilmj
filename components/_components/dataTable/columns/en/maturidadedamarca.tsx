"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"


export type Atributos = {
    id: string
    plataforma: string
    categoria: string
    mercado: string
    notaEmpresa: string
    peso: string
    media: string
}

export const columnsMaturidadeMarca: ColumnDef<Atributos>[] = [
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
        accessorKey: "plataforma",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Platform
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("plataforma")}</div>,
    },
    {
        accessorKey: "categoria",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Source Categories
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("categoria")}</div>,
    },
    {
        accessorKey: "companyRating",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Company Rating
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("notaEmpresa")}</div>,
    },
    {
        accessorKey: "mercado",
        header: "Market",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("mercado")}</div>
        ),
    },
    {
        accessorKey: "peso",
        header: "Weight",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("peso")}</div>
        ),
    },
    {
        accessorKey: "media",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Average
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize bg-green-300 flex justify-center items-center rounded-lg  ">
                <span className="text-green-600">{row.getValue("media")}</span>
            </div>
        ),
    },

]