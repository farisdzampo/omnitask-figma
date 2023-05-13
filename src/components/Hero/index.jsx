const Hero = () => {

    return (

        <section className="relative h-hero mx-auto" style={{ width: 887 }}>
            <div className="absolute top-0 left-0 rotate-180 opacity-20" style={{ width: 545, height: 544, background: '#2CB67D', filter: 'blur(100px)', borderRadius: '50%' }} />
            <div className="absolute right-0 rotate-180 opacity-20" style={{ width: 436, height: 436, background: '#7F5AF0', filter: 'blur(100px)', top: 50, borderRadius: '50%' }} />
            <div className="absolute bottom-0 rotate-180 opacity-20" style={{ width: 544, height: 544, background: '#5E43B3', filter: 'blur(100px)', left: '50%', transform: 'translate(-50%, 0)', borderRadius: '50%' }} />
        </section>
    );
};

export default Hero;