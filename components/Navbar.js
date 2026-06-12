function Navbar({ cambiarPagina }) {

    return (

        <nav className="bg-blue-950 text-white shadow-lg">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-3xl font-black">
                    ConectaFest
                </h1>

                <div className="flex gap-6">

                    <button
                        onClick={() => cambiarPagina("inicio")}
                        className="hover:text-yellow-300"
                    >
                        Inicio
                    </button>

                    <button
                        onClick={() => cambiarPagina("eventos")}
                        className="hover:text-yellow-300"
                    >
                        Eventos
                    </button>

                    <button
                        onClick={() => cambiarPagina("juego")}
                        className="hover:text-yellow-300"
                    >
                        Juego
                    </button>

                    <button
                        onClick={() => cambiarPagina("contacto")}
                        className="hover:text-yellow-300"
                    >
                        Contacto
                    </button>

                </div>

            </div>

        </nav>

    );

}