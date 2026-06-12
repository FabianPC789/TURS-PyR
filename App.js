function App() {

    const [pagina, setPagina] =
        React.useState("inicio");

    const [eventoSeleccionado, setEventoSeleccionado] =
        React.useState(null);

    if (eventoSeleccionado) {

        return (

            <DetalleEvento
                evento={eventoSeleccionado}
                volver={() => setEventoSeleccionado(null)}
            />

        );

    }

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar cambiarPagina={setPagina} />

            {pagina === "inicio" && (
                <Hero />
            )}

            {pagina === "eventos" && (
                <Eventos
                    eventos={eventos}
                    seleccionarEvento={setEventoSeleccionado}
                />
            )}

            {pagina === "juego" && (
                <Juego />
            )}

            {pagina === "contacto" && (
                <Contacto />
            )}

            <Footer />

        </div>

    );

}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);