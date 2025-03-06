
export function Select(props: {
    choices: any;
    value: any;
    handler: any;
    placeholder?: string;
    className?: string;
}) {
    return (
        <select
            dir={"rtl"}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(data) => props.handler(data.target.value)}
            className={props.className}
        >
            {Object.entries(props.choices).map(([key, value]) => (
                <option value={key}>{value as string}</option>
            ))}
        </select>
    );
}