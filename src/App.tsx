import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import './App.css'

function App() {

  return (
    <>
        <ParentComponent test='cool' onClick={() => {console.log("cool")}}>alsdkjfkladjsfk</ParentComponent>
    </>
  )
}

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & {
    test?: string
}

const ChildComponent = forwardRef<HTMLButtonElement, ButtonProps>(
    function ChildComponent(props, forwardedRef) {
        return (
            <button 
            ref={forwardedRef}
            {...props}
            />
        )
    }
)

const ParentComponent = forwardRef<HTMLButtonElement, ButtonProps>(
    function ParentComponent({type='button', children, test, ...props}, forwardedRef) {
        return (
            <ChildComponent {...props} type={type} ref={forwardedRef}>{children}{test}</ChildComponent>
        )
    }
)

export default App
