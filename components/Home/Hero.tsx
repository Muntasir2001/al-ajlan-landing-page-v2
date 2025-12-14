const Hero = () => {
    return (
        <div className="relative w-full bg-[url(/hero/kafd-bw.jpg)] bg-no-repeat bg-cover h-[50vh] px-5 py-12 md:px-24 md:py-24 before:absolute before:inset-0 before:bg-black/50 before:z-0">
            <div className="relative z-10">
                <h1 className="text-4xl text-white font-medium uppercase">
                    alajlan & alhusaiyin law firm
                </h1>
                <p className="text-white text-2xl mt-14">
                    We unite expertise and execution
                </p>
                <p className="text-white text-3xl font-bold mt-2">so you can</p>
                <p className="text-white text-2xl mt-2">
                    focus on what matters most.
                </p>
            </div>
        </div>
    );
};

export default Hero;
