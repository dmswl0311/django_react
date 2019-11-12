import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

// ------------------------
// 절취선 사이 코드 추가
import Post from './components/Post'
import Api from './Api';
// ------------------------

class App extends Component {
  state = {
    title: "",
    content: "",
    posts: [],
  }

  _handlingChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handlingSubmit = async (event) => {
    event.preventDefault()
    await Api.createPost({ title: this.state.title, content: this.state.content })

    // 아래 한줄 코드 추가
    this._getPosts()

  }

  // ------------------------
  // 절취선 사이 코드 추가 
  componentDidMount() {
    this._getPosts()
  }

  async _getPosts() {
    const results = await Api.getAllPosts()
    this.setState({
      posts: results.data,
    })
  }

  _handlingDelete = async (id) => {
    await Api.deletePost(id)
    this._getPosts()
  }

  // ------------------------

  render() {
    return (
      <div className="App" >
        <h1>멋쟁이 사자처럼 대나무숲</h1>
        <Form
          handlingChange={this._handlingChange}
          handlingSubmit={this._handlingSubmit}
          title={this.state.title}
          content={this.state.content}
        />

        {
          this.state.posts.map((post) =>
            <div>
              <Post key={post.id} id={post.id} title={post.title} content={post.content} Delete={this._handlingDelete} />
            </div>
          )
        }

      </div>
    );
  }
}

export default App;