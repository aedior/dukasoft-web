import { ComponentProps } from "react";
import { Button as btn } from "reactstrap";

export function Button(props: ComponentProps<typeof btn>) {
    return <button {...props} />;
}