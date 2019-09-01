import React, { Component } from 'react'


export class PersonDetails extends Component {
    state = {
        fuckingwork: "what"
    }
    componentDidUpdate(prevProps) {
        if (this.props.info !== prevProps.info) {
            console.log("it changed")
            console.log(prevProps)
            console.log(this.props)
            this.setState({
                member: this.props.info
            })
        }
    }
    render() {
        const gotData = this.state.member
        return (
            <div>
                {gotData ? (
                    <img src={`https://theunitedstates.io/images/congress/225x275/${this.state.member.id}.jpg`} />
                )
                    : (
                        <div></div>
                    )
                }

            </div>
        )
    }
}

export default PersonDetails
