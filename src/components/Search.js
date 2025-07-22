import { useState } from "react"; 
import {useNavigate} from 'react-router-dom';

export default function Search(){

      const[keyword, SetKeyword] = useState("");

      const navigate =  useNavigate()
      const searchHandler = () =>{
            navigate('/search?keyword=' + keyword)

      }
      return(
            <div className="input-group">
                  <input
                        onChange={(e) => SetKeyword(e.target.value)}  //receive the values from search bar
                        onBlur={searchHandler}
                        type="text"
                        id="search_field"
                        className="form-control"
                        placeholder="Enter Product Name ..."
                  />
                  <div className="input-group-append">
                        <button onClick={searchHandler} id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                  </div>
                  </div>
      )
}