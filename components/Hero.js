function Hero() {

    const imagenes = [
        "assets/images/concierto.jpg",
        "assets/images/hackaton.jpg",
        "assets/images/pc2.jpg",
        "assets/images/pc3.jpg",
        "assets/images/pc4.jpg",
        "assets/images/pc5.jpg",
        "assets/images/pc6.jpg",
        "assets/images/pc7.jpg",
        "assets/images/pc8.jpg",
        "assets/images/pc9.jpg",
        "assets/images/pc10.jpg",
        "assets/images/pc11.jpg"
    ];

    const [imagenActual, setImagenActual] =
        React.useState(0);

    React.useEffect(() => {

        const intervalo = setInterval(() => {

            setImagenActual(prev =>
                (prev + 1) % imagenes.length
            );

        }, 5000);

        return () => clearInterval(intervalo);

    }, []);

    return (

        <section className="relative h-[80vh] overflow-hidden">

            <div
                className="flex h-full transition-transform duration-[2000ms]"
                style={{
                    transform:
                        `translateX(-${imagenActual * 100}%)`
                }}
            >

                {imagenes.map((img, index) => (

                    <div
                        key={index}
                        className="min-w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${img})`
                        }}
                    />

                ))}

            </div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center text-white px-6">

                    <h2 className="text-7xl font-black">
                        ConectaFest
                    </h2>

                    <p className="mt-6 text-2xl max-w-3xl mx-auto">
                        Conectando jóvenes con conciertos,
                        ferias, eventos culturales,
                        tecnología y experiencias únicas.
                    </p>

                </div>

            </div>

        </section>

    );

}