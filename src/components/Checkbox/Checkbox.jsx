import React from 'react';

import './Checkbox.scss';

const Checkbox = ({checked,onClick,children}) => {
	return (
		<label className="g-checkbox">
			<input type="checkbox"   checked={checked}   onClick={onClick} />
			<div className="label">
				<div className="content">
					{children}
				</div>
			</div>
		</label>
	);
};

export default Checkbox;
