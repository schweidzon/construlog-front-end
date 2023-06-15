import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
      <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Construlog</title>
            <meta name="description" content="Simple landind page" />
            <meta name="keywords" content="" />
            <meta name="author" content="" />
            <link
             
              rel="stylesheet" 
              href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
            />

            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
              rel="stylesheet"
            />
        <title>Construlog</title>

      </Head>
      
        <html lang="pt">        
          <body className="h-screen text-white gradient">
            <nav id="header" className="fixed w-full z-30 top-0 text-white">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                  <a
                    className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    href="#"
                  >
                    LANDING
                  </a>
                </div>
                <div className="block lg:hidden pr-4">
                  <button
                    id="nav-toggle"
                    className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    <svg
                      className="fill-current h-6 w-6"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
                <div
                  className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                  id="nav-content"
                >
                  <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                      <Link 
                        className="inline-block py-2 px-4 text-black font-bold no-underline"
                        href="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="mr-3">
                      <a
                        className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                        href="#"
                      >
                        Sobre nós
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                        href="#"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            <section className="bg-white py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                  Construlog
                </h2>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      Construlog!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Bem-vindo a Construlog! Aqui, você pode acompanhar todos
                      os detalhes e progresso da sua obra em tempo real. Nosso
                      Diário de Obra online é uma ferramenta poderosa que
                      proporciona transparência e comunicação eficiente entre a
                      equipe de construção e o cliente. Ao fazer seu cadastro,
                      você terá acesso a importantes atualizações diárias. Além
                      disso, você pode conferir um registro detalhado de
                      atividades e etapas concluídas. Mantenha-se informado e
                      atualizado sobre sua obra, tudo em um só lugar!
                      <br />
                    </p>
                    <Link href="/signup" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Cadastre-se!
                    </Link>
                  </div>
                  <div className="w-full sm:w-1/2 p-6">
                    <img
                      className="mx-auto h-120 "
                      src="https://image.pngaaa.com/510/205510-small.png"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 p-6 mt-6"></div>
                </div>
              </div>
            </section>
          </body>
        </html>
      
    </>
  );
}
