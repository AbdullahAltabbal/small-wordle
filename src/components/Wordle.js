import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {

    const { currentGuess, handelKeyup, } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handelKeyup);

        return () => window.removeEventListener('keyup', handelKeyup);
    }, [handelKeyup])
    return (
        <div>currentGuess : {currentGuess}</div>
    )
}
