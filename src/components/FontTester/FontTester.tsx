import { ReactNode } from "react"
import React from "react"
import { css } from "@emotion/react"
import { useTheme } from "@emotion/react"
import { Theme } from "../../Theme.ts"


type ButtonProps = {
    children: ReactNode,
    spacing?: "small" | "medium" | "large",
}

const ButtonComponent: React.FC<ButtonProps> = ({children, spacing = "medium"}) => {
    const theme = useTheme() as Theme;

    const styles = css`
        padding: ${theme.spacing[spacing]};
        backgroundColor: ${theme.colors.primary};
    `;

    return <button css={styles}>{children}</button>
}

export default ButtonComponent;
