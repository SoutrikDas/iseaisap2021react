const RegularPapers = () => {
  return (
    <div>
      <h1 className="display-4 mt-5">Call for Regular Papers</h1>
      <hr className="mx-5 mb-5" />

      <div className="m-2 m-md-5 p-1 p-md-5 shadow bg-body rounded">
        <p className="fs-5" style={{ textAlign: "justify" }}>
          The 4<sup>th</sup> International Conference on Security and Privacy(ISEA-ISAP2021)
          is a premier conference focused on Information Security and Privacy.
          The fourth series of this conference will be hosted by IIT(ISM)
          Dhanbad. It is sponsored by Information Security and Education
          Awareness Project-Phase II (ISEA-II), an initiative of Ministry of
          Electronics and Information Technology, Govt. of India, to promote
          activities in the field of Information Security and Privacy. The
          vision of the conference is to provide awareness/promote about the
          recent advances in the field of information security and privacy,
          through keynote addresses, tutorials, selected Doctoral dissertation
          presentation, and pre-reviewed research paper presentations. The
          conference will also serve as an excellent platform for all the
          participants to share their views and ideas. In addition, the
          Conference Proceeding of ISEA-ISAP 2021 is planned to submit for
          inclusion in the IEEE Xplore. Further, the top three best papers will
          be recognized with a cash prize money of INR25K, INR15K, and 10K,
          respectively.
        </p>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          <a
            href="https://drive.google.com/file/d/1OfoyNiG1h2BSWrXeksReeFlvKIZbRqKO/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            ISEA ISAP 2021 Brochure Click here
          </a>
        </p>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          <strong>
            The organizer invites all IT/Computer Professionals, Researchers,
            Academicians, and Industry People to contribute their original
            papers on but not limited to the following topics:
          </strong>
        </p>

        <table className="table table-responsive table-bordered border-dark table-striped table-hover align-middle my-3">
          <caption className="text-primary my-2">
            <strong>
              Note: All papers should be in IEEE format. All presented papers
              will be compiled in conference proceedings and will be also
              available on IEEE Xplore (Under Preocess).
            </strong>
          </caption>
          <tbody>
            <tr>
              <td scope="row" className="text-center" style={{ width: "50%" }}>
                Cryptography and Cryptanalysis
              </td>
              <td scope="row" className="text-center" style={{ width: "50%" }}>
                Code-based Cryptography
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                System Security/Secure OS
              </td>
              <td scope="row" className="text-center">
                Data Hiding
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Hardware Security
              </td>
              <td scope="row" className="text-center">
                Security and Privacy in WSNs
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Network Security
              </td>
              <td scope="row" className="text-center">
                Security and Privacy in e-Services
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Intrusion Detection
              </td>
              <td scope="row" className="text-center">
                Cyber threat Analysis and Modelling
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Web and Cloud Security
              </td>
              <td scope="row" className="text-center">
                Botnet detection and mitigation
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                IoT Security
              </td>
              <td scope="row" className="text-center">
                Bluetooth Security
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Secret Sharing
              </td>
              <td scope="row" className="text-center">
                Cloud Security
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Social Network Analytics/ Privacy preservation in social
                networks
              </td>
              <td scope="row" className="text-center">
                Data Security and Privacy
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Security and Privacy on COVID-19 Technologies
              </td>
              <td scope="row" className="text-center">
                Biometric Security & Privacy
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Vulnerability Assessment &amp; Penetration Testing
              </td>
              <td scope="row" className="text-center">
                FinTech
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Side Channel Attacks
              </td>
              <td scope="row" className="text-center">
                Block-chain
              </td>
            </tr>
            <tr>
              <td scope="row" className="text-center">
                Anonymization
              </td>
              <td scope="row" className="text-center">
                Security in cashless transactions
              </td>
            </tr>
          </tbody>
        </table>
        <a
          className="btn-danger btn fs-4 rounded-3"
          href="https://easychair.org/conferences/?conf=iseaisap2021"
          target="_blank"
        >
          Submit Papers for Round II before 25<sup>th</sup> Sep
        </a>
      </div>
    </div>
  );
};

export default RegularPapers;
