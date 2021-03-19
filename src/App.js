import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNewPosts } from './graphql/queries';
import { createNewPost as createNewPostMutation, deleteNewPost as deleteNewPostMutation} from './graphql/mutations';

const initialFormState = { title: '', price: 0, location: '', seller: '', category: 'VEHICLES', image: '', description: '' }

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const apiData = await API.graphql({ query: listNewPosts });
    setPosts(apiData.data.listNewPosts.items);
  }

  async function createPost() {
    if (!formData.title || !formData.description) return;
    await API.graphql({ query: createNewPostMutation, variables: { input: formData } });
    setPosts([ ...posts, formData ]);
    setFormData(initialFormState);
  }

  async function deletePost({ id }) {
    const newPostsArray = posts.filter(newPost => newPost.id !== id);
    setPosts(newPostsArray);
    await API.graphql({ query: deleteNewPostMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Post An Ad</h1>
      <input
        onChange={e => setFormData({ ...formData, 'title': e.target.value})}
        placeholder="Title"
        value={formData.title}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Post description"
        value={formData.description}
        required="false"
      />
      <button onClick={createPost}>Create Post</button>
      <div style={{marginBottom: 30}}>
        {
          posts.map(post => (
            <div key={post.id || post.title}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button onClick={() => deletePost(post)}>Delete Post</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);