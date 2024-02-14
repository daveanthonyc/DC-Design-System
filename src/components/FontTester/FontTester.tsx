import { ReactNode } from "react";

type FontTesterProps = {
    test: ReactNode
}

const FontTester: React.FC<FontTesterProps> = ({test}) => {
    return <span>{test}</span>
}

export default FontTester;
