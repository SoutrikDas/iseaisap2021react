import { Link } from "react-router-dom";
let today = new Date();

const Ddaward = () => {
  return (
    <>
      
      <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded">
        <h1 class="display-4 mt-2">Doctoral Dissertation Award</h1>
        <hr className="mx-5 mb-5" />
        <p className="fs-5 text-start">
          Submissions of dissertations are invited from doctoral students who
          have carried out their research, in the area of security. The
          dissertation should have been submitted between 1- Mar-2016 to
          31-Dec-2020. Top three thesis will be awarded prize money of INR 50K,
          INR 30K, and INR 20K respectively.
          Submit Doctoral Dissertation through e-mail to : <a href="mailto:isea-isap2021@iitism.ac.in">isea-isap2021@iitism.ac.in</a>
        </p>
        <a
          className="btn-danger btn fs-4 rounded-3"
          href="mailto:isea-isap2021@iitism.ac.in"
          target="_blank"
        >
          Submit Doctoral Dissertations before 22<sup>nd</sup> September 2021 through e-mail
        </a>
      </div>
    </>
  );
};

export default Ddaward;
