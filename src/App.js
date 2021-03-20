import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
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
    const postsFromAPI = apiData.data.listNewPosts.items;
    await Promise.all(postsFromAPI.map(async post => {
      if (post.image) {
        const image = await Storage.get(post.image);
        post.image = image;
      }
      return post;
    }))
    setPosts(apiData.data.listNewPosts.items);
  }

  async function createPost() {
    if (!formData.title || !formData.description) return;
    await API.graphql({ query: createNewPostMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setPosts([ ...posts, formData ]);
    setFormData(initialFormState);
  }

  async function deletePost({ id }) {
    const newPostsArray = posts.filter(newPost => newPost.id !== id);
    setPosts(newPostsArray);
    await API.graphql({ query: deleteNewPostMutation, variables: { input: { id } }});
  }
  
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.title });
    await Storage.put(file.title, file);
    fetchPosts();
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
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createPost}>Create Post</button>
      <div style={{marginBottom: 30}}>
        {
          posts.map(post => (
            <div key={post.id || post.title}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              {
                 post.image && <img src={post.image} alt="alt" style={{width: 400}} />
              }
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