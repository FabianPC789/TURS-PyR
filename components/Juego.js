function Juego() {

    const [puntos, setPuntos] = React.useState(0);

    const [posicion, setPosicion] = React.useState({
        top: 100,
        left: 100
    });

    function moverMoneda() {

        setPuntos(prev => prev + 1);

        setPosicion({
            top: Math.random() * 300,
            left: Math.random() * 900
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
                className="relative bg-white rounded-2xl shadow-lg mx-auto"
                style={{
                    height: "400px",
                    maxWidth: "1000px"
                }}
            >

                <button
                    onClick={moverMoneda}
                    style={{
                        position: "absolute",
                        top: posicion.top,
                        left: posicion.left,
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