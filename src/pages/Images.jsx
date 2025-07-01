import NavBar from "../components/NavBar";

function Images(){
    return(
        <div>
            <NavBar />
            <h2>Working with images in React!</h2>
            <div className="container">
                <img src="../images/reactjs.jpeg" alt="React Logo" style={{ width: "300px", height: "300px", marginLeft: "10px" }} />
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
                            <td><img src="../images/toyota hilux.jpg" alt="Toyota Hilux" style={{ width: "100px", height: "100px" }} /></td>
                            <td>This is a very beautiful Toyota Hilux.</td>
                        </tr>
                        <tr>
                            <td><img src="../images/toyota hilux2.jpg" alt="Toyota Hilux" style={{ width: "100px", height: "100px" }} /></td>
                            <td>This is a another very beautiful Toyota Hilux.</td>
                        </tr>

                        <tr>
                            <td><img src="../images/toyota hilux3.jpg" alt="Toyota Hilux" style={{ width: "100px", height: "100px" }} /></td>
                            <td>This is another beautiful Toyota Hilux.</td>
                        </tr>
                        <tr>
                            <td><img src="../images/ig.jpg" alt="Instagram" style={{ width: "100px", height: "100px" }} /></td>
                            <td>This is a very beautiful Instagram image.</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Images;