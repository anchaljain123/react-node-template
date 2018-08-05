import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component {
	constructor(props){
        super(props);
        this.state = {
            codes: ''
        }
    }
	render() {
		return (
			<div>
            <input type="text" name="codes" value={this.state.codes} 
            onChange={this.handleChange} style={{
                height: '25px',
                width: '30%',
                borderRadius: '3px'
            }} />
            <div style={{ marginTop: '18px'}}>
            <button type="submit" name="submit" onClick={this.handleSubmit} style={{
                width: '120px',
                height: '30px'
            }}>Submit</button>
            </div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);