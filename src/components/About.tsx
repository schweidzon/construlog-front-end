import Link from "next/link";

export function About() {
  return (
    <section className="bg-white py-8 mt-20">
      <div className="container max-w-5xl mx-auto m-8">
       
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            
            <p className="text-gray-600 mb-8">
              Bem-vindo a Construlog! Aqui, você pode acompanhar todos os
              detalhes e progresso da sua obra em tempo real. Nosso Diário de
              Obra online é uma ferramenta poderosa que proporciona
              transparência e comunicação eficiente entre a equipe de construção
              e o cliente. Ao fazer seu cadastro, você terá acesso a importantes
              atualizações diárias. Além disso, você pode conferir um registro
              detalhado de atividades e etapas concluídas. Mantenha-se informado
              e atualizado sobre sua obra, tudo em um só lugar!
              <br />
            </p>
            <Link
              href="/signup"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
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
  );
}
