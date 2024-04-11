"use client";

import { Next13ProgressBar } from "next13-progressbar";
import { ReactNode } from "react";

function ProgressBarProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <Next13ProgressBar height="3px" color="#FF0000" options={{ showSpinner: false }} showOnShallow />
            {children}
        </>
    );
}

export default ProgressBarProvider;