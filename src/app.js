import React from 'react';
import { connect } from 'react-redux';
import { DemoComponent } from './components';
import { actions } from './actions';

const mapStateToProps = (state) => {
    return { state }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: function() {
            dispatch(actions.increment(arguments))
        },
        decrement: (...args) => dispatch(actions.decrement(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoComponent);