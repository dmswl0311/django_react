import React, { Component } from 'react'
export default class Post extends Component {

    _onDelete = () => {
        this.props.Delete(this.props.id)
    }

    render() {
        return (
            <div>
                <h6>글 번호 : {this.props.id}</h6>
                <h3>글 제목 : {this.props.title}</h3>
                <p>글 내용 : {this.props.content}</p>
                <button onClick={this._onDelete}>글삭제</button>
            </div>
        )
    }
}