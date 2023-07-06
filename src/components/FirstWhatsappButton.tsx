'use client'
import Image from "next/image";
import whatsappLogo from "../assets/icons8-whatsapp.svg";
import va from '@vercel/analytics';
import * as pixel from '../app/lib/fpixel'


export function FirstWhatsappButton() {

    return (
        
        <a
            href={`https://api.whatsapp.com/send?phone=+5511996231744&text=Quero garantir meu whey e óculos de sol!`}
            target="_blank"
            onClick={() => {
                // va.track('firstWhatsappButton')
                pixel.whatsappButtonEvent1()      
        }}
        
        >
            <button

                className="flex h-7 bg-yellow-300 border-2 border-gray-950 py-9 px-2 items-center w text-black font-bold rounded-2xl hover:bg-yellow-500 transition-colors w-[92vw] max-w-[42rem] md:px-4 lg:px-6"
                type="button"

            >
                <Image
                    src={whatsappLogo}
                    alt="logo do whatsapp"
                    width={68}
                    height={68}
                    className="max-h-[3rem] max-w-[3rem]"
                />

                <div className="flex flex-col text-center w-full -translate-x-[0.4rem]">
                    <p>POUCAS UNIDADES!! </p> Não fique de fora! Clique aqui e garanta essa oportunidade!
                </div>
            </button>
        </a>
    )
}
