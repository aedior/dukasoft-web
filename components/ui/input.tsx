import { ComponentProps } from "react";
import { Input as inp } from "reactstrap";

export function Input(props: ComponentProps<typeof inp>) {
    return <input {...props} />;
}