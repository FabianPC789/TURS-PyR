function Eventos({ eventos, seleccionarEvento }) {

    return (

        <section
            id="eventos"
            className="max-w-7xl mx-auto px-6 py-12"
        >

            <h2 className="text-4xl font-black text-center mb-10 text-blue-950">
                Próximos Eventos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {eventos.map((evento, index) => (

                    <div
                        key={index}
                        onClick={() => seleccionarEvento(evento)}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
                    >

                        <img
                            src={evento.imagen}
                            alt={evento.titulo}
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-5">

                            <h3 className="text-xl font-bold">
                                {evento.titulo}
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {evento.descripcion}
                            </p>

                            <p className="mt-3">
                                📍 {evento.lugar}
                            </p>

                            <p>
                                📅 {evento.fecha}
                            </p>

                            <p>
                                ⭐ {evento.rating}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}