import { ComponentProps } from "react";
import { Label as lbl } from "reactstrap";

export function Label(props: ComponentProps<typeof lbl>) {
    return <label {...props} />;
}