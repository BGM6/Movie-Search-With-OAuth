import React from 'react';

const Message = ({warning}) => {
	return(
		<div className="ui negative message">
			<div className="header">
				{warning}
			</div>
		</div>
	);
}

export default Message;