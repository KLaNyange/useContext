import { useContext } from "react"
import "./Card.css"
import { AppContext } from "../../App"

function Card() {
    const [chien, name] = useContext(AppContext)
    return (
        <div>
            <h1>Bonjour tout le monde</h1>
            <h1>{name}</h1>
            <h1>{chien}</h1>
        </div>
    )
}
export default Card
