import React, { Component } from 'react'

export default class Create extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handlingSubmit}>
                    <input
                        name='title'
                        value={this.props.title}
                        onChange={this.props.handlingChange}
                    />
                    <textarea
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                    />
                    <button type="submit">글 작성</button>
                </form>
            </div>
        )
    }
}