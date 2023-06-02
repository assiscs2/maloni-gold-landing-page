// import dynamic from 'next/dynamic';
import Image from "next/image";
import whatsappLogo from "../assets/icons8-whatsapp.svg";
// import { sendWhatsappMessage } from '../hooks/sendWhatsappMessage';




// createWhatsappMessage() {
//     console.log('cheguei')
//     // const phoneNumber = "11970325360"
//     // const whatsappMessageContent = "teste de mensagem"

//     // const url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(whatsappMessageContent);
//     //   window.location.href = url
// }

export function WhatsappButton() {
    const wppMessageContent = "teste de mensagem 2"
    const wppNumber = "11970325360"

    return (
        <a 
        href={`https://api.whatsapp.com/send?phone=${wppNumber}&text=${wppMessageContent}`}

        // href="https://api.whatsapp.com/send?phone=11970325360&text=teste de mensagem"
        >
        <button

            className="flex h-7 bg-yellow-300 border-2 border-gray-950 py-9 px-2 items-center justify-center text-black font-bold rounded-2xl hover:bg-yellow-500 transition-colors"
            type="button"

        >
            <Image
                src={whatsappLogo}
                alt="logo do whatsapp"
                width={80}
                height={80}
                className="max-h-[72px] ml-1"
            />
            {/* Clique aqui para garantir essa oportunidade ou tirar dúvidas!*/}

            <div className="flex flex-col -translate-x-2">
                <p>POUCAS UNIDADES!! </p> Compre agora ou tire suas dúvidas
                clicando aqui!
            </div>
        </button>
        </a>
    )
}

// export default WhatsappButton;