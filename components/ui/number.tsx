
export function InpNum(props: {
    value?: number;
    onChange: (num: number) => void;
}) {
    return (
        <input
            type="number"
            value={props.value}
            pattern="[0-9]*"
            onChange={(e) => {
                props.onChange(parseInt(e.target.value));
            }}
        />
    );
}