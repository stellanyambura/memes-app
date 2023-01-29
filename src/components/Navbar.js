import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

import {NavLink} from 'react-router-dom'


const Nav=()=>{
    return(
      <>
    <nav className="navbar bg-dark" style={{height: "150%", fontSize: "1.5rem", color:'white'}}>
        <NavLink to="/" style={{backgroundColor:'transparent'}}>😂😂</NavLink>
       
        <NavLink to="/randommemes" style={{backgroundColor:'transparent' ,hover:'red'}}>All memes</NavLink>
        <NavLink to="/login" style={{paddingRight: "15px",}}>LoginPage</NavLink>
       
        

      
</nav>
</>
    )
  }
  export default Nav






























// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         MEMESAPP
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               MEMES<span className="sr-only">(LIST)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               MEMELIST 
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
        
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownMenuLink"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
            
//             </a>
//             <div
//               className="dropdown-menu"
//               aria-labelledby="navbarDropdownMenuLink"
//             >
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

