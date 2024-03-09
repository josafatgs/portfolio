import "../styles.css";


function CubeInfo({number, characteristic}){
    return(
        <div className="bg-black flex items-center justify-center flex-col">
            <p className="text-white text-6xl">
                {number}<span className="fontPrimary">+</span>
            </p>
            <span className="text-gray-400">
                {characteristic}
            </span>
        </div>
    );
}

export default CubeInfo;