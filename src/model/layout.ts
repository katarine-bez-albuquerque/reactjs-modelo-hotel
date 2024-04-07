import { ReactNode } from "react";

export interface Layout {
    id?: string;
    classname?: string;
    children?: ReactNode;
}