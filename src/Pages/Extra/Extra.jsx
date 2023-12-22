import logo from "../../assets/logo.png"
const Extra = () => {
    return (
        <div className="my-14 space-y-5">
            <h2 className="text-center text-3xl font-semibold text-white">WHAT THE CLIENTS SAY</h2>
            <div className="divider divider-success w-[15%] mx-auto"></div>
            <p className="text-center">Very nice tool to keep track of my trainings and properly plan my duties</p>

            <h2 className="text-xl font-bold text-white text-center">Tuhin Hossain</h2>
            <img src={logo} alt="" className="w-[80px] h-[80px] mx-auto rounded-full border-4 border-[#02a388]"/>

        </div>
    );
};

export default Extra;