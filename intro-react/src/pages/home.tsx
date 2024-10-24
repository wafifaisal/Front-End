import "./home.css"
import person from '../assets/Screenshot 2024-10-23 152126.png'

function HomePage(){
    const str: string = "Hello!"
    return(
        <div className="pembungkus">
            <div>
            <h1 className="home"style={{color:"#FD8B51"}}>{str}</h1>
            <p className="kenalan" style={{color:"#493628"}}>I'm Wafi Faisal Falah, <br/> a Front-End Developer.</p>
            </div>
            <div className="gambar">
            <img alt="person" src={person} className="person" />
            </div>
        </div>
    )
}
export default HomePage