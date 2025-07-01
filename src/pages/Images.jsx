import NavBar from "../components/NavBar";
import rLogo from "../images/reactjs.jpeg"; // Importing the React logo image
import ig from "../images/ig.jpg"; // Importing Instagram image
import toyotaHilux1 from "../images/toyota hilux.jpg"; // Importing Toyota Hilux image 1
import toyotaHilux2 from "../images/toyota hilux2.jpg"; // Importng Toyota Hilux image 2
import toyotaHilux3 from "../images/toyota hilux3.jpg"; // Importing Toyota Hilux image 3

function Images(){
    return(
        <div>
            <NavBar />
            <h2>Working with images in React!</h2>
            <div className="container">
                <img src={rLogo} alt="React Logo" style={{ width: "300px", height: "300px", marginLeft: "10px" }} />
                <p>This is an image of the React logo.</p>
                <table className="table table-bordered">
                    <thead> 
                        <tr>
                            <th>Image Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={toyotaHilux1} alt="Toyota Hilux" style={{ width: "350px", height: "300px" }} /></td>
                            <td>This is a very beautiful Toyota Hilux.</td>
                        </tr>
                        <tr>
                            <td><img src={toyotaHilux2} alt="Toyota Hilux" style={{ width: "350px", height: "300px" }} /></td>
                            <td>This is a another very beautiful Toyota Hilux.</td>
                        </tr>

                        <tr>
                            <td><img src={toyotaHilux3} alt="Toyota Hilux" style={{ width: "350px", height: "300px" }} /></td>
                            <td>This is another beautiful Toyota Hilux.</td>
                        </tr>
                        <tr>
                            <td><img src={ig} alt="Instagram" style={{ width: "350px", height: "300px" }} /></td>
                            <td>This is a very beautiful Instagram image.</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Images;