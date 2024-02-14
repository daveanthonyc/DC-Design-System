import { ReactNode } from "react"

type TesterProps = {
    children: ReactNode,
    thing: string
}

const FontTester: React.FC<TesterProps> = ({children, thing}) => {
    return <span><p>{thing}</p>{children}</span>
}

export default FontTester;
