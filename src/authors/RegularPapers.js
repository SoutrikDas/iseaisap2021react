const RegularPapers = () => {
  return (
    <div>
      <h1 className="display-4 mt-5">Call for Regular Papers</h1>
      <hr className="mx-5 mb-5" />

      <div className="m-2 m-md-5 p-1 p-md-5 shadow bg-body rounded">
        <p className="fs-5" style={{textAlign:'justify'}}>Submissions of dissertations are invited from doctoral students who have carried out their research in India, in the area of security. The dissertation should have been submitted between 1- Mar-2016 to 31-Dec-2020. Top three thesis will be awarded prize money of INR 50K, INR 30K, and INR 20K respectively.</p>
        <p className="fs-5" style={{textAlign:'justify'}}><a href="https://drive.google.com/file/d/1OfoyNiG1h2BSWrXeksReeFlvKIZbRqKO/view?usp=sharing" target="_blank" rel="noreferrer noopener">ISEA ISAP 2021 Brochure Click here</a></p>
        <p className="fs-5" style={{textAlign:'justify'}}><strong>The organizer invites all IT/Computer Professionals, Researchers, Academicians, and Industry
          People to contribute their original papers on but not limited to the following topics:</strong></p>
          
        <table className="table table-responsive table-bordered border-dark table-striped table-hover align-middle my-3">
          <caption className="text-primary my-2"><strong>Note: All papers should be in IEEE format. All presented papers will be compiled in conference
            proceedings and will be also available on IEEE Xplore (Under Preocess).</strong></caption>
          <tbody>
            <tr>

              <td scope="row" className="text-center" style={{width:"50%"}}>Cryptography and Cryptanalysis</td>
              <td scope="row" className="text-center" style={{width:"50%"}}>Code-based Cryptography</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">System Security/Secure OS</td>
              <td scope="row" className="text-center">Data Hiding</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Hardware Security</td>
              <td scope="row" className="text-center">Security and Privacy in WSNs</td>
            </tr>
            <tr>
              <td scope="row" className="text-center">Network Security</td>
              <td scope="row" className="text-center">Security and Privacy in e-Services</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Intrusion Detection</td>
              <td scope="row" className="text-center">Cyber threat Analysis and Modelling</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Web and Cloud Security</td>
              <td scope="row" className="text-center">Botnet detection and mitigation</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">IoT Security</td>
              <td scope="row" className="text-center">Bluetooth Security</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Secret Sharing</td>
              <td scope="row" className="text-center">Cloud Security</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Social Network Analytics/ Privacy
                preservation in social networks</td>
              <td scope="row" className="text-center">Data Security and Privacy</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Security and Privacy on COVID-19
                Technologies</td>
              <td scope="row" className="text-center">Biometric Security & Privacy</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Vulnerability Assessment &amp; Penetration
                Testing</td>
              <td scope="row" className="text-center">FinTech</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Side Channel Attacks</td>
              <td scope="row" className="text-center">Block-chain</td>
            </tr>
            <tr>

              <td scope="row" className="text-center">Anonymization</td>
              <td scope="row" className="text-center">Security in cashless transactions</td>
            </tr>

          </tbody>
        </table>
        <a className="btn-danger btn fs-4 rounded-3" href="https://easychair.org/conferences/?conf=iseaisap2021" target="_blank">Submit Papers for Round II before 25<sup>th</sup> Sep</a>
      </div>
    </div>
  );
}

export default RegularPapers;