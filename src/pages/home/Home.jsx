
import "./home.css";
export default function Home() {
  return (
    <div className="home">
    <img className = "imges" src = "images/chillerplantimg.jpg" alt= "Chiller Plant" width="100%" height="520" style={{backgroundSize:"cover"}}></img>
    <div style={{backgroundColor: "rgb(251, 251, 255)"}}>
      <br/>
    <h2 style={{color:"darkblue"}}>Chiller Plant System</h2><br/>
    <p style={{color:"black", textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While HVAC systems are responsible for regulating the comfort levels of most indoor environments, a chiller plant act as a centralized cooling system which provides cooling for a building or a number of buildings. Additionally, it provides a portion of the air conditioning by HVAC systems. Although chiller plants sound like a new innovation, the concept is not actually new. Records have shown that the ancient Romans were already using cooling for their indoor environments. However, they did not use a centralized plant but instead used water to run through their buildings’ walls in order to cool down the temperature inside. </p>
    <br/>

    </div>
    </div>
  );
}
