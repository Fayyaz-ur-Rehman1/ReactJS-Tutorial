import {useState} from 'react'

function useCounter() {
    const [count, setCount] = useState(0);
    function Increment() {
        setCount(pre => pre + 1)
    }
    function Decrement() {
        setCount(pre => pre - 1)
    }
    function Reset() {
        setCount(0)
    }

    return [count, Increment, Decrement, Reset]
}

export default useCounter