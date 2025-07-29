import type { ReactNode } from "react"


export type CompChildren = {
    children: ReactNode
}

export type ButtonType = {
    text: string,
    type: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost',
    handler?: ()=> void
}

export type Projects = {
    id: number,
    title: string,
    desc: string,
    url: string,
    img: string,
    techStack: Array<string>
}

