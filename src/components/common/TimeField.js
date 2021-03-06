import React from 'react';

const TimeField = ({name, label, value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="{name}Input">
				{label}
			</label>
			<input type="time" value={value} 
				className="form-control" 
				name={name}
				onChange={onChange}
				placeholder="00:00:00"/>
		</div>
	);
};

TimeField.propTypes = {
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
};

export default TimeField;