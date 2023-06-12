import Image from "next/image";
import whatsappLogo from "../assets/icons8-whatsapp.svg";
import { wppNumber, wppMessageContent } from "./FirstWhatsappButton";

export function SecondWhatsappButton() {

    return (
        <a 
        href={`https://api.whatsapp.com/send?phone=${wppNumber}&text=${wppMessageContent}`}
        target="_blank"
        >
        <button

            className="flex h-7 bg-yellow-300 border-2 border-gray-950 py-9 px-2 items-center text-black font-bold rounded-2xl hover:bg-yellow-500 transition-colors w-[92vw]"
            type="button"

        >
            <Image
                src={whatsappLogo}
                alt="logo do whatsapp"
                width={68}
                height={68}
                className="max-h-[3rem] max-w-[3rem]"
            />

            <div className="flex flex-col -translate-x-2 w-full">
                <p className="text-center">Quero garantir meu Whey
                e Ganhar meu óculos!</p>
            </div>
        </button>
        </a>
    )
}