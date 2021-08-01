const Registration = () => {
    return ( 
        <div>
            <h1 className="display-4 mt-5">Registration</h1> 
            <hr className="mx-5 mb-5"/>
            <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded">
                <h2 className="display-6 mt-1 ">Registration Fees</h2>
                <hr className="mb-5 mx-5 " />
                <table className="table table-responsive table-bordered border-dark table-striped table-hover align-middle ">
                    <caption><strong>All the fees mentioned above are inclusive of 18% GST</strong></caption>
                    <thead>
                        <tr>
                        
                            <th scope="col" className="text-center">Participant Type</th>
                            <th scope="col" className="text-center">IEEE Member</th>
                            <th scope="col" className="text-center">Non IEEE Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td scope="row" className="text-center">Indian Author/Non Author</td>
                            <td scope="row" className="text-center">INR 6000 + 18% GST<br/>(Total: INR 7080)</td>
                            <td scope="row" className="text-center">INR 7000 + 18% GST<br/>(Total: INR 8260)</td>
                        </tr>
                        <tr>
                            
                            <td scope="row" className="text-center">International Author/Non Author</td>
                            <td scope="row" className="text-center">USD 200 + 18% GST<br/>(Total: USD 236)</td>
                            <td scope="row" className="text-center">USD 250 + 18% GST<br/>(Total: USD 295)</td>
                        </tr>
                        <tr>
                            
                            <td scope="row" className="text-center">Indian Student</td>
                            <td scope="row" className="text-center">INR 3000 + 18% GST<br/>(Total: INR 3540)</td>
                            <td scope="row" className="text-center">INR 4000 + 18% GST<br/>(Total: INR 4720)</td>
                        </tr>
                        <tr>
                            
                            <td scope="row" className="text-center">International Student</td>
                            <td scope="row" className="text-center">USD 100 + 18% GST<br/>(Total: USD 118)</td>
                            <td scope="row" className="text-center">USD 125 + 18% GST<br/>(Total: USD 147.5)</td>
                        </tr>
                    </tbody>
                </table>


                    
                    <h2 className="display-6 mt-5 ">Registration Guidelines</h2>
                    <hr className="mb-5 mx-5 " />


                <ol className="list-group list-group-numbered my-3 custom-font text-start  ">
                <li className="list-group-item list-group-item-action ">At least one of the authors of
                    every accepted paper must register for the conference as Author and present the paper in order for
                    it to be included in the conference proceedings of the ISEA-ISAP 2021, and subsequent submission to
                    IEEE Xplore® digital library. If more than one author of an accepted paper wish to attend the
                    conference, all such authors need to register separately by paying applicable registration fee.</li>

                <li className="list-group-item list-group-item-action"> Each author registration covers up to two papers for
                    the same set of authors.</li>

                <li className="list-group-item list-group-item-action ">Additional authors (other than
                    those who are included in the manuscript submitted for review) cannot be added to the camera ready
                    paper.</li>

                <li className="list-group-item list-group-item-action">All participants need to be register to attend the
                    ISEA-ISAP 2021 by paying the requisite registration fees.</li>

                <li className="list-group-item list-group-item-action ">Authors claiming subsidized
                    registration fees for IEEE members/students need to produce valid IEEE membership card and/or valid
                    Institute student ID card in the registration counter at the time of reporting for conference
                    failing which they will be required to pay the applicable balance registration fee of the relevant
                    category. Additionally all student registrants should scan and upload the proof of enrollment (valid
                    student ID showing name and current status) as well as IEEE membership card (if applicable) during
                    the registration.</li>

                <li className="list-group-item list-group-item-action"> The registration fees include the conference kit,
                    admission to tutorials/technical sessions, lunch on all conference days, morning and evening
                    refreshments, and the banquet dinner on the second/third day of the conference.</li>

                <li className="list-group-item list-group-item-action "> Authors have to complete the
                    registration process before uploading the camera ready paper and e-copyright form as per the
                    stipulated final dates.The Registration fee should be submitted to the account whose details are
                    given below.</li>
                <li className="list-group-item list-group-item-action bg-secondary text-white"> Note: Any accepted paper included in the final program is expected to have at least one author attend and present the paper at the conference. Non-presented paper will not be submitted to IEEE Xplore® digital library as per IEEE no-show policy.</li>
            </ol>
                
            <h2 className="display-6 mt-5 ">Registration Details</h2>
            <hr className="mb-5 mx-5 " />
            <p className="fs-5 text-start ps-3">All candidates those wish to register may kindly transfer the money to the following Bank Account</p>
            <ul class="list-group list-group-flush my-3 text-start">
                <li class="list-group-item fs-4">Name of the Account:<strong> IIT (ISM) Special Fund</strong></li>
                <li class="list-group-item fs-4">Account Number:<strong> 0986101024892</strong></li>
                <li class="list-group-item fs-4">Name of the Bank:<strong> Canara Bank</strong></li>
                <li class="list-group-item fs-4">IFSC:<strong> CNRB0000986</strong></li>
            </ul>
            <p className="fs-5 text-start ps-3">Please note down the transaction ID and take a snapshot of the transaction completion then fill the registration form given below in the link</p>
            <p className="text-light bg-primary fs-4 mt-5 p-4 d-inline-block rounded-3">Registration Link Coming Soon</p>
            {/* <p className="text-primary fs-4 mt-5">Registration Link Coming Soon.</p>
            <p className="text-light bg-dark fs-4 mt-5 p-4 d-inline-block">Registration Link Coming Soon. Stay Tuned.</p> */}

            </div>

        </div>
     );
}
 
export default Registration;