import CardAwards from "./CardAward";
import "../styles.css";

function Awards(){
    return(
        <section className="bg-neutral-900 p-16 grid justify-items-center">
            <h1 className="fontPrimary text-2xl">Awards</h1>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2">
                <CardAwards imagePath={"./assets/hack.jpg"} title={"Hackthon Odoo Partner Winner 3rd place"}></CardAwards>
                <CardAwards imagePath={"./assets/greencarson.jpeg"} title={"Green Carson App Development Puebla Reecicla"}></CardAwards>
            </div>
        </section>
    );
}

export default Awards;