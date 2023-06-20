import Image from "next/image";
import wheyMax from "../assets/whey-100-max.png";
import wheyIntegral from "../assets/whey-100-integral.png";
import glassesBlack from "../assets/glasses2.png";
import glassesYellow from "../assets/glasses3.png";
import { FirstWhatsappButton } from '../components/FirstWhatsappButton';
import logoMaloni from '../assets/maloni-logo-3.png'
import { SecondWhatsappButton } from "../components/SecondWhatsappButton";
import { VideoPlayer } from "../components/VideoPlayer";
import logoInstagram from '../assets/instagram-logo.svg'
import logoFacebook from '../assets/facebook-logo.svg'




export default function Home() {

  return (

    <main className="flex items-center text-gray-100 flex-col justify-center text-sm min-w-full">
      <div className="w-full">

        <header className="bg-gray-950 h-[4rem] flex items-center justify-center text-yellow-200">
          <Image src={logoMaloni} height={120} width={200} alt="logo Maloni Gold" className="h-14 w-28" />

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
              <div className="flex items-center justify-center max-w-[53rem]">
                <p className=" text-base font-bold leading-tight -mt-1">
                  💥😎 Imperdível, comprou ganhou! 😎💥
                </p>
              </div>
              <div className="flex px-2 items-center justify-center flex-col pt-2 font-bold">
                <div className="flex flex-col items-center justify-center text-center">
                  <span>
                    Levando o Whey 100% Max Titanium ou Integralmédica, ganhe um óculos de
                    sol e{" "}
                    <span className="font-extrabold underline underline-offset-2 text-yellow-300">
                      {" "}
                      receba em até 24hs com FRETE GRÁTIS
                    </span>{" "}
                    {" "}para {" "}
                    <p>São Paulo/SP!</p>
                  </span>
                  <p className="mt-1"></p>
                  <span className="font-bold">
                    🚨 Não para por ai!! Retirando na loja, você ganha mais um {" "}
                    <span className="font-extrabold underline underline-offset-2 text-yellow-300">brinde secreto!!</span> 
                    💥💭
                  </span>
                </div>
                <div className="flex items-center justify-center pt-1">
                  <p className="mt-1"></p>
                  <span className="text-xs text-gray-200 font-light leading-tight">
                    Estrada Itaquera Guaianazes, nº45 - SP
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center pt-4 -mt-1">
                <FirstWhatsappButton />
              </div>
              <div className="h-[20rem] mt-4 flex items-center justify-center overflow-hidden pt-16">
                <Image src={glassesYellow} alt="imagem de um óculos amarelo" height={150} width={200} className="absolute -translate-y-[9.5rem] translate-x-[5rem] rotate-12 h-28 w-44" />

                <Image src={glassesBlack} alt="imagem de um óculos preto" height={150} width={200} className="absolute -translate-y-[9.5rem] -translate-x-[5rem] -rotate-12 h-28 w-44" />
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
                   1 Whey por R$ 129,00 {" "}
                  <span className="underline underline-offset-3 font-black text-2xl block">GANHE 1 ÓCULOS DE SOL!</span>
                  {/* Por apenas R$ 125,00 cada!! */}
                </p>
              </div>
            </div>
          </section>
          <section 
          // className="flex flex-col p-4 gap-3 items-center justify-center w-full  mt-14"
          className="flex p-4 gap-3 flex-col justify-center items-center w-full mt-14"
          >
            <div className="flex flex-col max-w-[53rem]">
              <span className="text-center px-2">
                Uma das maiores e mais completas lojas de São Paulo, a <span className="font-extrabold underline underline-offset-2 text-yellow-300">Maloni Gold Suplementos Alimentares</span> conta com uma equipe especializada, preços imbatíveis, estacionamento no local e <span className="font-extrabold underline underline-offset-2 text-yellow-300">FRETE GRÁTIS</span> para São Paulo/SP.

              </span>
              <p className="text-center mt-2">
                De uma espiada neste vídeo abaixo a estrutura que você está comprando, <span className="font-extrabold underline underline-offset-2 text-yellow-300">SEM RISCOS</span> de produtos adulterados (falsos) que infelizmente hoje vem crescendo muito na internet, além desta promoção comprou ganhou, temos tudo que você precisa para evoluir físicamente e também cuidar da sua saúde, com preços realmente baixos.
                </p>
              <div className="flex items-center justify-center pt-4">
                <SecondWhatsappButton />
              </div>

              <p className="text-center mt-6 font-extrabold text-yellow-300 text-base">Apenas 100 unidades não deixe para depois! 
              </p>

            </div>
            <div className="flex flex-col gap-2 items-center justify-center min-h-[12rem] min-w-[20rem] p-6 -mt-8 -mb-8">
              <VideoPlayer />

              {/* <span className="text-center mt-2">Ficamos na Estrada Itaquera Guaianases 45 - São Paulo/SP</span> */}
            </div>
            
            <p className="text-center text-gray-300 translate-y-2">Redes sociais:</p>
            <div className="flex gap-2 justify-center items-center">
              
              <a href="https://www.instagram.com/malonigold/" target="_blank">
              <Image src={logoInstagram} height={48} width={48} alt="Logo do instagram" className="max-h-[3rem] max-w-[3rem]"/>
              </a>
              <a href="https://m.facebook.com/maloni.gold/" target="_blank">
              <Image src={logoFacebook} height={48} width={48} alt="Logo do facebook" className="max-h-[2.8rem] max-w-[2.8rem]"/>
              </a>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-gray-900 p-4 flex items-center justify-center w-full">
        <p className="font-bold text-yellow-300">
          Maloni gold{" "}
          <span className="text-xs text-yellow-200 leading-none font-light">
            - Suplementos Alimentares
          </span>
        </p>
      </footer>
    </main>
  );
}
