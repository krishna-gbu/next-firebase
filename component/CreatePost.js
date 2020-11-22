import React, { useState } from 'react';
import fire from './firebase-config'

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
 
 
  const handleSubmit = (event) => {
    event.preventDefault();

    fire.firestore()
    .collection('blog')
    .add({
      title: title,
      content: content,
    });

    setTitle('');
    setContent('');

    

    setTimeout(() => {
        alert('Blogpost created');
    }, 2000)

}

//   console.log({
//     "title": title,
//     "content": content
//   });

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title<br />
          <input type="text" value={title} 
           onChange={({target}) => setTitle(target.value)} />
        </div>
        <div>
          Content<br />
          <textarea value={content} 
           onChange={({target}) => setContent(target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
export default CreatePost;