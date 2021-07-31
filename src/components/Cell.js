// import React from "react"
import PropTypes from "prop-types"
import emptyimg from '../images/emptyimg.png'

// User.propTypes = {
//   /**
//    * User's name
//    */
//   name: PropTypes.string.isRequired,
//   /**
//    * User's age
//    */
//   age: PropTypes.number,
// }

// User.defaultProps = {
//   text: "Jitendra Nirnejak",
//   age: 21,
// }

// export default User

/**
 * Component for showing details of the People.
 * Mostly used in Organizing Committee page
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */
const Cell = ({ name, imgurl, loc, position }) => {
    return (

        <div className="card  " >
            {/* <div className="row g-0">
                <div className="col-md-2">
                    
                    {imgurl && <img src={imgurl} className=" custom-img" alt="Alt  " />}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{loc}</p>
                        {position && <p className="card-text">{position}</p>}
                    </div>
                </div>
            </div> */}

            {/* <h2 className="text-center">{position}</h2> */}

            <div className="row g-0">
                <div className="col-md-4 text-center my-4">
                    {imgurl ? <img src={imgurl} className="img-fluid rounded-start border border-dark" style={{ maxWidth: '160px', maxHeight: '170px' }} alt="..." /> : <img src={emptyimg} className="img-fluid rounded-start border border-dark" style={{ maxWidth: '160px', maxHeight: '170px' }} alt="..." />}
                </div>
                <div className="col-md-8 text-center d-flex align-items-center flex-column">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title fs-3">{name}</h5>
                        {position && <p className="lead">{position}</p>}
                        <p className="card-text">{loc}</p>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Cell;