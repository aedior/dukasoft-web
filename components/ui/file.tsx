

export function FileUpload(props: {
    name: string;
    value: any;
    handler: any;
    text: string;
    className?: string;
}) {
    return (
        <>
            <label className={props.className} htmlFor={props.name}>
                {props.text}
            </label>
            <input className="hidden" id={props.name} type="file" />
        </>
    );
}
