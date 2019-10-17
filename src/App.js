import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { functionTypeAnnotation } from "@babel/types";
import { useState } from "react";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";
import Tabs from "muicss/lib/react/tabs";
import Tab from "muicss/lib/react/tab";
import { SliderPicker } from "react-color";

class Component extends React.Component {
  state = {
    background: "#fff"
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };

  render() {
    return <SliderPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />;
  }
}

function Header(props) {
  return (
    <>
      <p>Header</p>

      <Profile name={props.name} />
    </>
  );
}

function Profile(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
    </>
  );
}

function Feed(props) {
  return (
    <section className="feed">
      <p>Feed</p>
      <AddPostForm />
      {props.posts.map(item => {
        return <Post message={item.message} author={item.author} />;
      })}
    </section>
  );
}

function AddPostForm() {
  return (
    <>
      <p>Add Post Form</p>
    </>
  );
}

function Post(props) {
  const [count, setCount] = useState(0);

  const update = () => {
    setCount(count + 1);
  };
  return (
    <article className="post">
      <p>Post</p>
      <h3>{props.message}</h3>
      <h4>{props.author}</h4>
      <AddCommentForm />
      <Comment />
      <Comment />
      <h3>You have liked this post {count} times</h3>
      <Button color="primary" onClick={update}>
        Like
      </Button>
    </article>
  );
}

function AddCommentForm() {
  return (
    <>
      <p>Add Comment Form</p>
    </>
  );
}

function Comment() {
  return (
    <>
      <p>Comment</p>
    </>
  );
}

function Footer(props) {
  return (
    <>
      <p>Footer</p>
      <p>Hello {props.name}</p>
    </>
  );
}

function App(props) {
  const name = "Natalie"; //Pass to profile and footer
  // const posts = [<Post />, <Post />, <Post />]; //Pass to feed

  const [posts, setPosts] = useState([
    {
      message: "Hej",
      author: "Natalie"
    }
  ]);

  function addPost() {
    const copy = posts.concat({
      message: "God dag",
      author: "En flink en"
    });
    setPosts(copy);
  }

  return (
    <div className="App">
      <Button color="accent" onClick={addPost} className="addButton">
        Add new post
      </Button>
      <Header name={name} />
      <Feed posts={posts} />
      <Footer name={name} />
      <SliderPicker></SliderPicker>
    </div>
  );
}

export default App;
