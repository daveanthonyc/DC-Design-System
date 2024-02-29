import { MutableRefObject, Ref, RefCallback } from "react";

export function mergeRefs<T>(refs: Array<Ref<T>>): RefCallback<T> {
    return (
        (value) => {
            refs.forEach((ref) => {
                if (typeof ref === 'function') {
                    ref(value);
                } else if (typeof ref === 'object' && ref !== null) {
                    (ref as MutableRefObject<T | null>).current = value;
                }
            })
        }
    )
}
