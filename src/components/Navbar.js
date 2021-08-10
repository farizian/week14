import React from 'react'
// import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component{
  render(){
    const qty = this.props.qty
    return(
      <div>
      <navbar className={this.props.home===true?"navbar navbar-expand-xxl navbar-light bg-white":"navbarlg navbar-expand-xxl navbar-light bg-white"}>
        <div className={this.props.home===true?"container-fluid nav col-lg-8 col-sm-12":"container-fluid nav col-lg-12"}>
          <button className="navbar-toggler bar" type="button" onclick="">
            <span className="navbar-toggler-icon baricon" ></span>
          </button>
          {
            this.props.home===true?(
            <a className="navbar-brand logo" href="#">Food Items</a>
            ): <a className="navbar-brand logo2" href="#">History</a>
          }
            <input type="checkbox" id="check"/>
          {
            this.props.home===true?(
            <div className="box">
                <input type="text" placeholder="Search"/>
                <label for="check"><FontAwesomeIcon icon={faSearch} className="i" />
                </label>
            </div>
            ):null
          }
        </div>
        {
          this.props.home===true?(
          <div className="container-fluid navi col-lg-4">
            <a className="navbar-brand cartitle" href="">Cart</a>
            {this.props.cart.length>=1?
              <div id="numcard" className="cartnum rounded-circle">{qty}</div>
              :null
            }
          </div>
          ):null
        }
      </navbar>
      </div>
    )
  }
}

export default Navbar;