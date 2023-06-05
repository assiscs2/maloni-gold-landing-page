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
    const wppNumber = "+5511996231744"

    return (
        <a 
        href={`https://api.whatsapp.com/send?phone=${wppNumber}&text=${wppMessageContent}`}

        // href="https://api.whatsapp.com/send?phone=11970325360&text=teste de mensagem"
        >
        <button

            className="flex h-7 bg-yellow-300 border-2 border-gray-950 py-9 px-2 items-center text-black font-bold rounded-2xl hover:bg-yellow-500 transition-colors"
            type="button"

        >
            <Image
                src={whatsappLogo}
                alt="logo do whatsapp"
                width={68}
                height={68}
                className="max-h-[4rem]"
            />
            {/* Clique aqui para garantir essa oportunidade ou tirar dúvidas!*/}

            <div className="flex flex-col -translate-x-2">
                <p>POUCAS UNIDADES!! </p> Compre agora ou tire suas dúvidas
                clicando aqui!
            </div>

            <div className="h-full w-2 h-full bg-yellow-300 w-4">
            </div>
        </button>
        </a>
    )
}

// export default WhatsappButton;