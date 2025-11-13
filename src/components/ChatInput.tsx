import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent, useState } from "react";

type Props = {
    name: string;
}

export const ChatInput = ({ name }: Props) => {
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('')

    const handleSubmit = () => {
        if (textInput.trim() !== '') {
            chatCtx?.addMessage(name, textInput.trim());
            setTextInput('');
        }
    }

    const handleKeyDownAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }

    return (
        <div className="flex gap-2 sm:gap-3 items-center">
            <input
                className="flex-1 bg-transparent text-white text-sm sm:text-md outline-none"
                placeholder={`${name}, digite uma mensagem`}
                value={textInput}
                onChange={e => setTextInput(e.target.value)}
                onKeyDown={handleKeyDownAction}
            />
            <button
                onClick={handleSubmit}
                disabled={textInput.trim() === ''}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-white text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
                Enviar
            </button>
        </div>
    )
}