import { useUser } from "@/contexts/UserContext";
import { useState, KeyboardEvent } from "react"

export const NameInput = () => {
    const userCtx = useUser();
    const [nameInput, setNameInput] = useState('');

    const handleSubmit = () => {
        if (nameInput.trim() !== '' && nameInput !== 'bot') {
            userCtx?.setUser(nameInput.trim())
        }
    }

    const handleKeyDownAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }

    return (
        <div className="mt-8 sm:mt-14">
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">Qual seu nome?</p>
            <div className="flex gap-2 sm:gap-3 items-center text-base sm:text-lg">
                <input
                    type="text"
                    className="flex-1 border border-white/30 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white bg-white/10 outline-none text-sm sm:text-base"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyDown={handleKeyDownAction}
                />
                <button
                    onClick={handleSubmit}
                    disabled={nameInput.trim() === '' || nameInput === 'bot'}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-white text-sm sm:text-base font-medium transition-colors whitespace-nowrap"
                >
                    Enviar
                </button>
            </div>
        </div>
    )
}