import { 
    ButtonHTMLAttributes, 
    PropsWithChildren, 
    MouseEvent,
    forwardRef, 
    useCallback,
    useRef,
} from "react";
import { mergeRefs } from "../../core/utils/mergeRefs";
import { tokens } from "../../core/tokens";

interface ButtonBaseProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
    function ButtonBase({onClick: onClickProp, type = 'button', ...props}, forwardedRef) {

        const ref = useRef<HTMLButtonElement>(null);

        const clickHandler = useCallback(
            (event: MouseEvent<HTMLButtonElement>) => {
                ref.current?.focus();
                onClickProp?.(event);
            }, [onClickProp, ref]
        );

        return (
            <button 
                ref={mergeRefs([ref, forwardedRef])}
                onClick={clickHandler}
                type={type}
                css={{
                    appearance: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    border: 'none',
                    padding: 0,
                    fontFamily: tokens.font.body,
                    fontSize: 'inherit',
                    lineHeight: 'inhertit'
                }}
                {...props}
            />
        )
    }
);

export default ButtonBase;
