// // import React from 'react'
// // import PropTypes from 'prop-types'
// // import { Link } from 'react-router-dom'
// // export default function Navbar(props) {
// //   return (
// //     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="/">{props.title}</a>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link className="nav-link" to="/about">{props.About}</Link>
// //         </li>
// //       </ul>
// //       {/* <form className="d-flex" role="search">
// //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
// //         <button className="btn btn-outline-success" type="submit">Search</button>
// //       </form> */}
// //       <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
// //           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //           <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
// //       </div>
// //       {/* <div class={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
// //           <input class="form-check-input mx-3" onClick={props.togleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //           <label class="form-check-label" for="flexSwitchCheckDefault">Enable green Mode</label>
// //       </div> */}

// //     </div>
// //   </div>
// // </nav>
// //   )
// // }
// // //first p must be small
// // //for setting the type of the title and any other thing you want to enter
// // Navbar.propTypes={   //if we write .isRequired in this then 
// //     // after removing the default props the error will occur as it is compulsory to pass
// //     title: PropTypes.string.isRequired,               
// //     About:PropTypes.string.isRequired
// // }
// // //for writing when any feild or argument is not passed.
// // Navbar.defaultProps={  //if any prop is not passed then it take that as default like in progrmm. languages
// //     title: "Set title here",
// //     About: "About"
// // }

// // // navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-body-tertiary

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// // import { Link } from 'react-router-dom';

// export default function Navbar(props) {
//     return (
//         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="#">{props.title}</Link>  {/* changed has been occur*/}
//                 {/* use Link and to in above type statements */}
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link" aria-current="page" to="#">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">{props.aboutText}</Link>
//                         </li>
//                     </ul>
//                     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//                         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
//                         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
//   }



import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };