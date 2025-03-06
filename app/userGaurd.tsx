"use client";

import { ReactNode } from "react";
import { RedirectType, redirect } from "next/navigation";

export default function UserGaurd(props: { children: ReactNode }) {
    if (true) {
        redirect(`login?next=${window.location.pathname}`, RedirectType.replace);
    }
    return <>{props.children}</>;
}
