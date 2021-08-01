// SOcialc under Committee
import {technicalProgramCommitte} from './members';

const TechnicalCommittee = () => {
    return (
        <div>
            
            <h1 className="display-4 mt-5">Technical Program Committee</h1> 
            <hr className="mx-5 mb-5"/>
        
            <div>

            <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded">

                <table className="table table-bordered border-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Affiliation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        technicalProgramCommitte.map( (person)=>{
                            return(
                                <tr>
                                    <td scope="row">{person.name}</td>
                                    <td scope="row">{person.worksAt}</td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr> */}
                </tbody>
                </table>
            </div>
        </div>  
        </div>
    );
}
 
export default TechnicalCommittee;