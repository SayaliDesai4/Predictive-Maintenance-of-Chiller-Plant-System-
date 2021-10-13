
import "./home.css";
export default function Home() {
  return (
    
    <div className="home">
    
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
    

      <div class="row">
        <div class="column">
        <img className = "imges" src = "images/chillerplantimg.jpg" alt= "Chiller Plant" width="100%" height="520" style={{backgroundSize:"cover"}}></img>
        <img className = "imges" src = "images/chiller.jpg" alt= "Chiller Plant" width="100%" height="520" style={{backgroundSize:"cover"}}></img>
        </div>

        <div class="column">
        <br></br>
          <h2>Chiller Plant System</h2>
            <p style={{textAlign:"justify", paddingRight: "10%"}}>
              <br></br>While HVAC systems are responsible for regulating the comfort levels of most indoor environments, a chiller plant act as a centralized cooling system which provides cooling for a building or a number of buildings. Additionally, it provides a portion of the air conditioning by HVAC systems. Although chiller plants sound like a new innovation, the concept is not actually new. Records have shown that the ancient Romans were already using cooling for their indoor environments. However, they did not use a centralized plant but instead used water to run through their buildings’ walls in order to cool down the temperature inside. 
                </p>
              <br></br><br></br><br></br>
                <h2>How Efficient Are They?</h2>
                <p style={{textAlign:"justify", paddingRight: "10%"}}>
                

                <br></br> According to the Department of Energy, 10-15% of the energy which is consumed by buildings are allocated for airconditioning. Even though condensing units are becoming more and more efficient with the introduction of newer technologies, it is still possible to save more energy by reducing the size of the plant along with improving the distribution systems. 
                </p>
        </div>

      </div> 
    </div>
    </div>

    </div>
    </div>
  );
}
