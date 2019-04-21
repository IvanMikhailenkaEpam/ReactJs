import React, {Component} from 'react';
import * as PropTypes from "prop-types";

class SortBarInfo extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        const { text } = this.props;
        return (
            <div>
                <div className="col-auto ml-4 font-weight-bold"><span>{text}</span></div>
            </div>
        );
    }
}

export default SortBarInfo;
