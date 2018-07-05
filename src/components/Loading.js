import React from 'react';

export default props => {
    if (props.loading) {
        return <div className="loading">Loading...</div>;
    }

    return false;
}