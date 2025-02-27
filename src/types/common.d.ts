import { type ReactNode } from "react"
 export type ClassName = {
    className?: string
} 

type ReactChildren = React.ReactNode | React.ReactElement

 type Children<T extends ReactChildren = React.ReactNode> = {
    children: T
}

type ClassNameAndChildren = ClassName & Children;