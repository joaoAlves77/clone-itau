import Container from "./Container";

const SectionServices = () => {
    return (
        <section className="bg-white">
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h1 className="text-primary-gray text-[56px]">Gerencie suas finanças sem sair de casa</h1>
                    <p>Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, 
                        rápida e o melhor, no conforto de casa.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default SectionServices;