import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions/count'

function Counter(props) {

    const incrementBy1=(e)=> {
        props.dispatch(increment())
    }

    const decrementBy1=(e)=> {
        if(props.count !== 0) {
        props.dispatch(decrement())
    }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    {props.count}
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <div className="col-4">
                   <button className ="btn btn-primary" onClick={/*  <button onClick={()=> {
                        props.dispatch(increment())
                    }}></button> */incrementBy1} >Increment</button>
                </div>
                <div className="col-4">
                <button className ="btn btn-primary" onClick={decrementBy1} >Decrement</button>
                </div>
            </div>
      
        </div>
    )

}

const mapStateToProps=(state)=> {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)