import pic from "../../../assets/img/cat1.jpg"

const WhoCanUse = () => {
    const bg = {
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        height: "500px"

    }
    return (
        <div className="my-14">
            <div className="text-center">
                <p className="border-b-lime-500">Benefit</p>
                <h1 className="text-3xl font-semibold">Who Can Be Benefit </h1>
            </div>
            <div className="hero mt-10  w-3/4 mx-auto" style={bg}>
                <div className="hero-overlay bg-opacity-15"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" flex flex-wrap gap-6">
                        <div className="card w-96 flex items-center h-80 bg-base-100 bg-transparent backdrop-blur shadow-xl">
                            <div className="card-body ">
                                <h2 className="card-title">Web Developer!</h2>
                                <p className=" font-semibold">
                                    <ul className="list-disc ml-10 mb-4">
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                    </ul>
                                </p>

                            </div>

                        </div>
                        <div className="card w-96 h-80 flex items-center bg-base-100 bg-transparent backdrop-blur shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Student!</h2>
                                <p>
                                    <ul className="list-disc ml-10 mb-4">
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                        <div className="card w-96 h-80 flex items-center bg-base-100 bg-transparent backdrop-blur shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title ">Freelancer!</h2>
                                <p>
                                    <ul className="list-disc ml-10 mb-4">
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                        <li>If a dog chews shoes whose shoes does he choose?</li>
                                    </ul>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhoCanUse;