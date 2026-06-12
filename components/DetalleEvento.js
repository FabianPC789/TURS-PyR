function DetalleEvento({ evento, volver }) {

    return (

        <div className="min-h-screen bg-gray-100">

            <nav className="bg-blue-950 text-white p-4">

                <h1 className="text-3xl font-black">
                    ConectaFest
                </h1>

            </nav>

            <div className="max-w-6xl mx-auto bg-white mt-8 rounded-2xl shadow-lg overflow-hidden">

                <img
                    src={evento.imagen}
                    className="w-full h-[500px] object-cover"
                />

                <div className="p-8">

                    <h2 className="text-5xl font-black">
                        {evento.titulo}
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">
                        {evento.descripcion}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">

                        <div className="bg-gray-100 p-4 rounded-xl">
                            <strong>📍 Ubicación</strong>
                            <p>{evento.lugar}</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl">
                            <strong>📅 Fecha</strong>
                            <p>{evento.fecha}</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl">
                            <strong>⭐ Calificación</strong>
                            <p>{evento.rating}</p>
                        </div>

                    </div>

                    <div className="mt-10">

                        <h3 className="text-3xl font-bold mb-4">
                            Descripción del Evento
                        </h3>

                        <p className="text-gray-700 leading-8">
                            {evento.descripcionCompleta}
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">

                        <div className="bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-xl">
                                ⏰ Horario
                            </h4>
                            <p>{evento.horario}</p>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-xl">
                                👥 Capacidad
                            </h4>
                            <p>{evento.capacidad}</p>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-xl">
                                🏢 Organizador
                            </h4>
                            <p>{evento.organizador}</p>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-xl">
                                🎁 Premios
                            </h4>
                            <p>{evento.premios}</p>
                        </div>

                    </div>

                    <div className="mt-10">

                        <h3 className="text-3xl font-bold mb-4">
                            Requisitos
                        </h3>

                        <p className="text-gray-700">
                            {evento.requisitos}
                        </p>

                    </div>

                    <div className="mt-10">

                        <h3 className="text-3xl font-bold mb-4">
                            Actividades
                        </h3>

                        <ul className="space-y-3">

                            {evento.actividades?.map((actividad, index) => (

                                <li
                                    key={index}
                                    className="bg-gray-100 p-3 rounded-lg"
                                >
                                    ✅ {actividad}
                                </li>

                            ))}

                        </ul>

                    </div>

                    <button
                        onClick={volver}
                        className="mt-10 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
                    >
                        Volver
                    </button>

                </div>

            </div>

        </div>

    );

}