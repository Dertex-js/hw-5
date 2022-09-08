import * as React from "react";

type Props = {
    children: React.ReactNode,
    object: { a: string } | null
}

const Button: React.FC<Props> = ({ children, object }: Props) => {
    return <button onClick={async () => {}}>{object?.a}{children}</button>
}

export default Button;