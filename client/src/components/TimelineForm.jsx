import { Component } from "react";
import Timeline from "./Timeline";
import { Button, Stack } from 'react-bootstrap'
import TimelineItem from "./TimelineItem";

class TimelineForm extends Component {
    constructor() {
        super();
        this.state = {
            eventName: "",
            eventDetail: "",
            action: "",
            events: [],
            showForm: true,
        };
        this.handleChangeEventName = this.handleChangeEventName.bind(this);
        this.handleChangeEventDetail = this.handleChangeEventDetail.bind(this);
        this.handleChangeAction = this.handleChangeAction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEventName(e) {
        this.setState({ eventName: e.target.value });
    }

    handleChangeEventDetail(e) {
        this.setState({ eventDetail: e.target.value });
    }

    handleChangeAction(e) {
        this.setState({ action: e.target.value });
    }

    /**
     * This function handles the submission of a form by adding the form data to an array of events in the
     * component's state.
     */
    handleSubmit(e) {
        e.preventDefault();
        const events = this.state.events;
        events.unshift({
            time: new Date().toLocaleTimeString(),
            eventName: this.state.eventName,
            eventDetail: this.state.eventDetail,
            action: this.state.action,
        });

        this.setState({ events, eventName: "", eventDetail: "", action: "", showForm: false });
    }

    /**
     * This function maps through an array of events and returns a TimelineItem component for each event
     * with the current date and event details.
     * @returns The `renderEvents()` method is returning an array of `TimelineItem` components, one for
     * each event in the `this.state.events` array. Each `TimelineItem` component is passed the `date`,
     * `time`, `eventName`, and `eventDetail` props from the corresponding event object in the
     * `this.state.events` array.
     */
    renderEvents() {
        return this.state.events.map((val, index) => {
            const date = new Date().toLocaleDateString();
            return (
                <TimelineItem
                    key={index}
                    date={date}
                    time={val.time}
                    eventName={val.eventName}
                    eventDetail={val.eventDetail}
                />
            );
        });
    }


    render() {
        return (

            <div className="main">
                <Stack gap={4}>
                    <h2>Timeline</h2>
                    <Timeline header={"Latest Activity".toUpperCase()}>{this.renderEvents()}</Timeline>
                    {this.state.showForm && (
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Event Name">Event Name</label>
                                <input
                                    className="form-control"
                                    value={this.state.eventName}
                                    onChange={this.handleChangeEventName}
                                />
                                <label htmlFor="Event Detail">Event Detail</label>
                                <input
                                    className="form-control"
                                    value={this.state.eventDetail}
                                    onChange={this.handleChangeEventDetail}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    )}
                    <Button onClick={() => this.setState({ showForm: true })}>Add Event</Button>


                </Stack>

            </div>
        );
    }
}

export default TimelineForm;