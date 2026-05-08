import * as React from "react";

function cnCard(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cnCard(
                "rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-100 shadow-xl",
                className
            )}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }: CardProps) {
    return (
        <div
            className={cnCard("p-6", className)}
            {...props}
        />
    );
}