import { ComponentProps } from "react";
import { Input as inp } from "reactstrap";

export function Check(props: ComponentProps<typeof inp>) {
    return <input type="checkbox" {...props} />;
}
