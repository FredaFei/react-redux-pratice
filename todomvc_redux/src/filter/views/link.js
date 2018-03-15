import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setFilter} from '../actions'

const Link = ({active,children,onClick})=>{
    if(active){
        return <b className="filter selected">{children}</b>
    }else {
        return (
            <button className="filter not-selected" onClick={onClick}>{children}</button>
        )
    }
}
Link.propTypes = {
    filter: PropTypes.string,
    onClick: PropTypes.func
}
const mapStateToProps = (state, ownProps)=>{
    return {
        active: state.filter === ownProps.filter
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onClick: ()=>dispatch(setFilter(ownProps.filter))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Link)