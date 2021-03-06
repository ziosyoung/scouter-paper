import React, {Component} from 'react';
import './StepGeneral.css';
import {zeroPadding} from '../../../../../../common/common';
import Moment from 'react-moment';
import 'moment-timezone';

class StepGeneral extends Component {
    /*
    public int parent;
	public int index;

	public int start_time;
	public int start_cpu;

	getStepType
	getOrder
	getStepTypeName
	*/
    render() {
        let stepStartTime = Number(this.props.startTime) + Number(this.props.row.step.start_time);
        return (
            <div className="general">
                <span className="index">{zeroPadding(this.props.row.step.index, 5)}</span>
                <span className="type">{this.props.type}</span>
                <span className="start-time"><Moment date={new Date(Number(stepStartTime))} format="YYYY-MM-DD HH:mm:ss.SSS"></Moment></span>
                <span className="elapsed">{this.props.elapsed !== undefined ? this.props.elapsed + " ms": ""}</span>
                {this.props.row.step.stepType === "16" && <span className="value">{Number(this.props.row.step.updated) >= 0 && '#' + this.props.row.step.updated}</span>}
                {this.props.row.step.stepType !== "16" && <span className="value">{!isNaN(this.props.row.step.value) && '#' + this.props.row.step.value}</span>}

            </div>)
    }
}

export default StepGeneral;