function Contacto() {


React.useEffect(() => {

    const contenedor = document.getElementById("mapa");

    if (!contenedor || contenedor._leaflet_id) return;

    const mapa = L.map("mapa").setView(
        [-12.0464, -77.0428],
        5
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "OpenStreetMap"
        }
    ).addTo(mapa);

    L.marker([-12.0464, -77.0428])
        .addTo(mapa)
        .bindPopup("Concierto Juvenil - Lima");

    L.marker([-16.4090, -71.5375])
        .addTo(mapa)
        .bindPopup("Hackatón Nacional - Arequipa");

    L.marker([-13.5319, -71.9675])
        .addTo(mapa)
        .bindPopup("Festival Cultural - Cusco");

}, []);

return (

    <section id="contacto" className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-5xl font-black text-center text-blue-950 mb-10">
            Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

            <form className="bg-white p-8 rounded-2xl shadow-lg">

                <div className="mb-5">

                    <label className="block mb-2 font-bold">
                        Nombre
                    </label>

                    <input
                        type="text"
                        className="w-full border rounded-lg p-3"
                        placeholder="Ingrese su nombre"
                    />

                </div>

                <div className="mb-5">

                    <label className="block mb-2 font-bold">
                        Correo
                    </label>

                    <input
                        type="email"
                        className="w-full border rounded-lg p-3"
                        placeholder="correo@ejemplo.com"
                    />

                </div>

                <div className="mb-5">

                    <label className="block mb-2 font-bold">
                        Mensaje
                    </label>

                    <textarea
                        rows="5"
                        className="w-full border rounded-lg p-3"
                        placeholder="Escribe tu mensaje"
                    ></textarea>

                </div>

                <button
                    type="submit"
                    className="bg-blue-950 text-white px-6 py-3 rounded-lg"
                >
                    Enviar
                </button>

            </form>

            <div className="bg-white p-4 rounded-2xl shadow-lg">

                <h3 className="text-2xl font-bold mb-4">
                    Nuestra Ubicación
                </h3>

                <div
                    id="mapa"
                    style={{ height: "350px" }}
                    className="rounded-xl"
                ></div>

            </div>

        </div>

    </section>

);


}
