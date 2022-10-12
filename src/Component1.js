import React from 'react'
import { connect } from 'react-redux';
import { MapDispatchToProps, MapStateToProps } from './Mapstate';

const Component1 = (props) => {
  // console.log(props.state.reducerfun.loading)
  // console.log(props.state.reducerfun.users)
  return (
    <div className="main_div_component">
      <button onClick={()=>props.fetch1()}>Fetch</button>
      {props.state.reducerfun.loading?"Loading...":props.state.reducerfun.users.map((d , i)=>{
          return(
            <div className="main_repetitive_div" key={i}>
              <div className="image_div"><img src= {d.avatar_url+".jpg"} alt="" className="img_class"/></div>
              <p className="p_login_class">{d.login}</p>
            </div>

          )
      })}
      
    </div>
  )
}

export default connect(MapStateToProps,MapDispatchToProps)(Component1);