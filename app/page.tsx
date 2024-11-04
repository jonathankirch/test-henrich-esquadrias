import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header className="absolute py-2 w-full -top-2 z-10">
        <Navbar />
      </header>

      <section className="relative h-[850px] shadow-lg">
        <Image
          src="/casa.jpg"
          alt="Casa moderna com esquadrias"
          width={1200}
          height={800}
          className="object-cover inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold font-mono">Henrich Esquadrias</h1>
          <p className="mt-2 text-lg">Esquadrias de madeira e alumínio</p>
          <a
            href="#contact"
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg flex transition">
            Faça seu orçamento aqui <FaWhatsapp size={28} className="ml-2" />
          </a>
        </div>
      </section>

      <main>
        <section id="sobre" className="pt-10 px-5 sm:px-24">
          <div className="pt-5">
            <h2 className="text-3xl font-bold text-center font-mono">
              Henrich Esquadrias
            </h2>
            <p className="mt-6 text-center sm:max-w-2xl mx-auto">
              Especialistas em esquadrias de alta qualidade, oferecemos soluções
              ideais para residências e empresas, sempre com foco em excelência.
              Combinamos design sofisticado, tecnologia de ponta e durabilidade,
              transformando cada espaço com estilo, segurança e funcionalidade
              para atender a todas as necessidades do seu projeto.
            </p>
          </div>

          <div className="sm:-mt-10">
            <Image
              src="/esquadrias.png"
              alt="Esquadrias"
              width={600}
              height={300}
              className="ml-auto"
            />
          </div>
        </section>

        <section
          id="servicos"
          className="py-5 sm:py-16 sm:px-36 bg-gray-800 border-y border-gray-700 shadow-xl">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg group hover:scale-110  transition item-1">
              <h3 className="text-xl font-bold my-14 group-hover:underline font-mono">
                Atendimento Especializado
              </h3>
              <p className="mt-2 text-gray-600 mb-5">
                Nossa equipe está comprometida em oferecer um atendimento
                personalizado e profissional, acompanhando seu projeto do início
                ao fim.
              </p>
              <div className="justify-end flex">
                <BsPatchCheck
                  size={30}
                  className="group-hover:text-green-600"
                />
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg sm:scale-110 transition  group item-meio">
              <h3 className="text-xl font-bold my-14 group-hover:underline font-mono">
                Qualidade Superior
              </h3>
              <p className="mt-2 text-gray-600 mb-5">
                Trabalhamos com materiais de altíssima qualidade, garantindo
                durabilidade e resistência em todas as nossas esquadrias.
              </p>
              <div className="justify-end flex">
                <BsPatchCheck
                  size={30}
                  className="group-hover:text-green-600"
                />
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg group hover:scale-110 transition item-3">
              <h3 className="text-xl font-bold my-14 group-hover:underline font-mono">
                Personalização
              </h3>
              <p className="mt-2 text-gray-600 mb-5">
                Oferecemos soluções sob medida, adaptando nossos produtos às
                necessidades únicas de cada cliente.
              </p>
              <div className="justify-end flex">
                <BsPatchCheck
                  size={30}
                  className="group-hover:text-green-600"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="quemsomos" className="py-5 my-10">
          <div className="sm:flex px-5 sm:w-2/3 mx-auto">
            <div className="sm:w-2/3 mx-auto my-auto">
              <h2 className="text-2xl font-bold font-mono">
                Excelência em Esquadrias
              </h2>
              <p className="mt-3 text-justify ">
                Na Henrich Esquadrias, oferecemos soluções sob medida com
                entrega rápida e eficiente. Nossa equipe altamente qualificada
                garante um atendimento personalizado, acompanhando cada cliente
                desde o projeto até a instalação, sempre focada em sua total
                satisfação.
              </p>
            </div>
            <div className="sm:w-1/3">
              <Image
                src="/rapido-eficiente.png"
                alt="Entrega rápida e eficiente (representação)"
                height={400}
                width={300}
                className="mx-auto sm:ml-auto w-1/2 sm:w-auto"
              />
            </div>
          </div>
          <div className="sm:flex sm:flex-row-reverse sm:w-2/3 mt-10 mx-auto">
            <div className="sm:w-2/3 my-auto px-5">
              <h2 className="text-2xl font-bold font-mono">
                Qualidade e Variedade
              </h2>
              <p className="mt-3 text-justify">
                Com anos de experiência no mercado, unimos qualidade superior e
                preços competitivos, garantindo o melhor custo-benefício.
                Oferecemos uma ampla variedade de produtos, como portas, janelas
                e fachadas, todos fabricados com materiais de alta durabilidade
                e design sofisticado.
              </p>
            </div>
            <div className="sm:w-1/3 mt-2 sm:mt-0">
              <Image
                src="/custo-beneficio.png"
                alt="Imagem representativa"
                height={400}
                width={300}
                className="mx-auto sm:ml-0 w-1/2 sm:w-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <hr className="w-3/4 mx-auto border-gray-500 rounded-full" />

      <div id="contatos" className="mt-10">
        <div className="bg-gray-800 text-white mx-5 sm:w-1/3 sm:mx-auto rounded-md shadow px-10 py-10">
          <h2 className="text-center text-4xl font-bold mb-3 ">
            Entre em contato
          </h2>
          <p className="text-center">
            Quer falar com a gente? Escolha uma opção de contato!
          </p>
          <div className="flex justify-center pt-7 pb-5 sm:gap-x-24 gap-x-10">
            <ul>
              <li className="flex bg-white rounded-full text-black p-2 font-bold mb-3 hover:scale-105 transition">
                <a href="#" target="_blank" className="flex mx-auto">
                  <FaWhatsapp size={28} color="#25D366" /> Whatsapp
                </a>
              </li>
              <li className="flex bg-white rounded-full text-black p-2 font-bold hover:scale-105 transition">
                <a href="#" target="_blank" className="flex mx-auto">
                  <FaInstagram size={28} color="#C13584" /> Instagram
                </a>
              </li>
            </ul>
            <ul>
              <li className="flex bg-white rounded-full text-black p-2 font-bold mb-3 hover:scale-105 transition text-center">
                <a href="#" target="_blank" className="flex mx-auto">
                  <MdEmail size={28} color="#C71610" /> E-Mail
                </a>
              </li>
              <li className="flex bg-white rounded-full text-black p-2 font-bold hover:scale-105 transition">
                <a href="#" target="_blank" className="flex mx-auto">
                  <FaFacebook size={28} color="#4267B2" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13889.630114864836!2d-51.8028203!3d-29.5044783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c71c5f6e06e91%3A0x826bd92c183578de!2sHenrich%20Esquadrias!5e0!3m2!1spt-BR!2sbr!4v1729794764426!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mx-auto w-screen h-96 shadow-lg mt-14"></iframe>
      </div>

      <footer className="bg-gray-800 text-white py-8 px-5 sm:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contato</h2>
            <p className="text-gray-400 hover:underline">
              <a href="https://wa.me/5521XXXXXXXXX" target="_blank">
                Telefone: (XX) XXXX-XXXX
              </a>
            </p>
            <p className="text-gray-400 hover:underline">
              <a href="mailto:exemple@gmail.com" target="_blank">
                Email: exemple@gmail.com
              </a>
            </p>
            <p className="text-gray-400 hover:underline">
              <a
                href="https://maps.app.goo.gl/vmywATypsXTufqfU7"
                target="_blank">
                Endereço: R. Evaldo Schaefer, 811 - Canabarro, Teutônia - RS
              </a>
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="sm:ml-24">
            <h2 className="text-xl font-semibold mb-4">Links Rápidos</h2>
            <ul className="space-y-2 ">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#quemsomos" className="text-gray-400 hover:text-white">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="#contatos" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Henrich Esquadrias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
