import "../styles.css";
import CardProjet from "./CardProject";


function Portfolio(){
    return(
        <section className="bg-neutral-900 p-16 grid justify-items-center" id="Projects">
            <h1 className="fontPrimary text-2xl">My Work</h1>
            <h2 className="text-white text-6xl">Major Projects</h2>
        
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2">
                <CardProjet title={"Web Administrator for Events"} description={"An applicaction to manage events where there can be different type of users"} codeLink={"https://github.com/josafatgs/ExpoIngenieriaSite"} demoLink={"http://lab403azms01.itesm.mx/TC2005B_401_5/ExpoIngenieria/"} imagePath={"./assets/P1.png"}></CardProjet>
                <CardProjet title={"WasteCollect Mobile App"} description={"Mobile app like Uber App, facilitating waste collection. Integrated mapping functionalities using Android Studioand Swift, allowing users to locate nearby waste collection centers and request trash pickup"} codeLink={"https://github.com/RaulDiazR/ReciclaApp_Android"} imagePath={"./assets/P2_Portada.png"}></CardProjet>
                <CardProjet title={"Sintax Highlighter"} description={" This lightweight tool seamlessly integrates with any Java-based project, providing intuitive color-coded highlighting for enhanced code comprehension. "} imagePath={"./assets/P3.png"}></CardProjet>
                <CardProjet title={"Traffic Simulator"} description={" A lightweight traffic simulation model designed to mimic real-world traffic scenarios. This model utilizes basic algorithms to simulate vehicle movement, lane changes, traffic signals, and interactions between vehicles and traffic infrastructure "} imagePath={"./assets/P4.png"} demoLink={"https://www.canva.com/design/DAFxEZkqTTI/9lxC3_E4gJJcZdNmWdCxbw/edit"}></CardProjet>
            </div>
        </section>
    );
}

export default Portfolio;