function Juego() {

    const [puntos, setPuntos] = React.useState(0);

    const [posicion, setPosicion] = React.useState({
        top: 100,
        left: 100
    });

    const contenedorRef = React.useRef(null);

    function moverMoneda() {

        setPuntos(prev => prev + 1);

        const ancho = contenedorRef.current.offsetWidth;
        const alto = contenedorRef.current.offsetHeight;

        const tamañoMoneda = 60;

        setPosicion({
            top: Math.random() * (alto - tamañoMoneda),
            left: Math.random() * (ancho - tamañoMoneda)
        });

    }

    return (

        <section id="juego" className="max-w-7xl mx-auto py-16 px-6">

            <h2 className="text-5xl font-black text-center text-blue-950 mb-4">
                Minijuego
            </h2>

            <p className="text-center text-xl mb-6">
                Atrapa la moneda
            </p>

            <h3 className="text-center text-3xl font-bold mb-6">
                Puntaje: {puntos}
            </h3>

            {puntos >= 20 && (

                <div className="text-center mb-6 text-green-600 text-4xl font-black">
                    🎉 ¡Ganaste!
                </div>

            )}

            <div
                ref={contenedorRef}
                className="relative bg-white rounded-2xl shadow-lg mx-auto overflow-hidden"
                style={{
                    height: "400px",
                    maxWidth: "1000px",
                    width: "100%"
                }}
            >

                <button
                    onClick={moverMoneda}
                    style={{
                        position: "absolute",
                        top: `${posicion.top}px`,
                        left: `${posicion.left}px`,
                        width: "60px",
                        height: "60px",
                        fontSize: "50px",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer"
                    }}
                >
                    🪙
                </button>

            </div>

        </section>

    );

}