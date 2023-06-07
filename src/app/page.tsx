import dynamic from "next/dynamic";
import Image from "next/image";
import whatsappLogo from "../assets/icons8-whatsapp.svg";
import wheyMax from "../assets/whey-100-max.png";
import wheyIntegral from "../assets/whey-100-integral.png";
import glassesBlack from "../assets/glasses2.png";
import glassesYellow from "../assets/glasses3.png";
import { WhatsappButton } from '@/compontents/WhatsappButton';
import logoMaloni from '../assets/maloni-logo-3.png'


export default function Home() {

  return (
  
    <main className="flex items-center text-gray-100 flex-col justify-center text-sm min-w-full">
      <div className="w-full">
        
        <header className="bg-gray-950 h-[4.5rem] flex items-center justify-center text-yellow-200">
          <Image src={logoMaloni} height={120} width={200} alt="logo Maloni Gold" className="h-14 w-28"/>

            <span className="text-xs font-extralight">
              {" "}
              - Loja física desde 2009
            </span>
        </header>
        <div
          // className="bg-gray-100"
          className="bg-gradient-to-br from-red-800 to-blue-800"
          // className="bg-gradient-to-tl from-blue-600 via-purple-900 to-red-600"
        >
          <section className="flex p-4 gap-3 items-center justify-center w-full">
            <div>
              <div className="flex items-center justify-center">
                <p className="mb-3 text-base font-bold">
                  💥😎 Imperdível, comprou ganhou! 😎💥
                </p>
              </div>
              <div className="flex px-2 items-center justify-center flex-col pt-2 font-bold">
                <div className="flex flex-col items-center justify-center text-center">
                  <span>
                    Comprando o Whey 100% Max ou Integral, ganhe um óculos de
                    sol e{" "}
                    <span className="font-extrabold underline underline-offset-2 text-yellow-300">
                      {" "}
                      receba em até 24hs com FRETE GRÁTIS
                    </span>{" "}
                     {" "}para São Paulo/SP!
                  </span>
                  <p className="mt-1"></p>
                  <span className="font-bold">
                    🚨 Não para por ai!! Retirando na loja, você ganha mais um
                    brinde secreto!!
                💥💭
                  </span>
                </div>
                <div className="flex items-center justify-center pt-2">
                  <p className="mt-1"></p>
                  <span className="text-xs text-gray-200 font-light">
                    Estrada Itaquera Guaianazes, nº45 - SP
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center pt-4">
                <WhatsappButton />
              </div>
              <div className="h-[20rem] mt-4 flex items-center justify-center overflow-hidden pt-16">
                <Image src={glassesYellow} alt="imagem de um óculos amarelo" height={150} width={200} className="absolute -translate-y-[9.5rem] translate-x-[5rem] rotate-12 h-28 w-44"/>
          	    
                <Image src={glassesBlack} alt="imagem de um óculos preto" height={150} width={200} className="absolute -translate-y-[9.5rem] -translate-x-[5rem] -rotate-12 h-28 w-44"/>
                {/* h-[182px] w-[8.5rem] */}
                <Image
                  className="h-[14rem] w-[7.6rem] translate-x-[48px] translate-y-1"
                  src={wheyMax}
                  alt="imagem whey 100% marca: Max"
                  height={500}
                  width={250}
                  priority={true}
                />
                {/* h-56 w-64 */}
                <Image
                  className="h-[17rem] w-[16rem] translate-x-[0.75rem]"
                  src={wheyIntegral}
                  alt="imagem whey 100% marca: Integralmédica"
                  height={700}
                  width={420}
                  priority={true}
                />
                {/* <Image className="position absolute " src={oculosMaloni} height={500} width={250} priority={true}/> */}
              </div>
              <div className="flex items-center justify-center -translate-y-5">
                <p className="absolute z-50 text-yellow-300 font-bold text-xl text-center translate-y-12">
                  Comprando 1 Whey por R$ 125,00 {" "}
                  <span className="underline underline-offset-3 font-black text-2xl block">GANHE 1 ÓCULOS!</span> 
                  {/* Por apenas R$ 125,00 cada!! */}
                </p>
              </div>
            </div>
          </section>
          <section className="flex p-4 gap-3 items-center flex-col justify-center w-full mt-28">
            <div className="flex flex-col">
              <span className="text-center px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                molestie volutpat ligula sed ultrices. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Aliquam nec erat rutrum leo aliquet suscipit. Phasellus
                at augue vel nibh commodo semper id interdum magna. Pellentesque
                quis mollis odio. Donec ac arcu vitae metus iaculis sollicitudin
                gravida ut mi.
              </span>
              <div className="flex items-center justify-center pt-4">
                <button className="flex h-7 bg-yellow-300 border-2 border-gray-950 py-9 px-2 items-center justify-center text-black font-bold rounded-2xl hover:bg-yellow-500 transition-colors">
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
              </div>
            </div>
            <div className="flex items-center justify-center min-h-[14rem] min-w-[20rem] bg-red-500">
              IMAGEM DA LOJA PLACEHOLDER
            </div>
            <div className="bg-red-500 p-4">Informações de localização</div>
          </section>
        </div>
      </div>
      <footer className="bg-gray-900 p-4 flex items-center justify-center w-full">
        <p className="font-bold">
          Maloni gold{" "}
          <span className="text-xs text-gray-200 leading-none font-light">
            - Suplementos Alimentares
          </span>
        </p>
      </footer>
    </main>
  );
}
