import { ChildrenProps } from "../../shared/types/ChildrenProps"

type ButtonProps = ChildrenProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void,
    type: string
}

function Button({children, onClick}:ButtonProps) {
    return (
        <button className={``} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
