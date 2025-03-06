import { ComponentProps } from "react";
import { Label as lbl } from "reactstrap";


export function Num(props: ComponentProps<typeof lbl>) {
    return <label {...props} />;
}