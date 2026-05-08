import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    variant?: "default" | "secondary";
};

export function Button({
    className,
    variant = "default",
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={cn(
                "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/40 disabled:pointer-events-none disabled:opacity-50",
                variant === "default" &&
                "bg-emerald-400 text-black hover:bg-emerald-300",
                variant === "secondary" &&
                "border border-white/10 bg-white/[0.05] text-zinc-100 hover:border-emerald-400/40 hover:bg-white/[0.08]",
                className
            )}
            {...props}
        />
    );
}