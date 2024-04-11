
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...agrs: ClassValue[]) {
    return twMerge(clsx(...agrs));
}