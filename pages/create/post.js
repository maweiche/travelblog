import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BoldPlugin, BoldButtonBar } from '@slate-editor/bold-plugin'
import { SlateEditor } from '../../components/SlateEditor/Editor';
import { useRouter } from 'next/router';


const CreatePost = () => {
    // create a form for a post that will be sent to /api/posts and wait for a response
    // if the response is successful, redirect to /post/[id]
    
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('')
    const [featuredPost, setFeaturedPost] = useState(false);
    const [featuredimage, setFeaturedimage] = useState('');
    const [password, setPassword] = useState('');

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { title, slug, excerpt, contentToSubmit, featuredPost, featuredimage };
        await fetch('/api/createPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        // router.push(`/post/${slug}`);
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        if(password != process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
            alert('Incorrect Password');
            setPassword('');
        }
    };

    const plugins = [
        BoldPlugin()
      ]
      
    const SlateRichTextEditor = () => (
        <SlateEditor plugins={plugins}>
            {/* <SlateToolbar>
                <BoldButtonBar />
            </SlateToolbar>
        
            <SlateContent /> */}
        </SlateEditor>
        // <div>hey</div>
    )

    return (
        <>
            {password === process.env.NEXT_PUBLIC_AUTH_PASSWORD ? (
                <div>
                    <h1>Create Post</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Slug</label>
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Excerpt</label>
                            <input
                                type="text"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Content</label>
                            {renderContentEditor()}
                            {/* {Leaf()} */}
                        </div>
                        <div>
                            <label>Featured Post</label>
                            <input
                                type="checkbox"
                                value={featuredPost}
                                onChange={(e) => setFeaturedPost(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Featured Image</label>
                            <input
                                type="text"
                                value={featuredimage}
                                onChange={(e) => setFeaturedimage(e.target.value)}
                            />
                        </div>
                        <button type="submit">Create</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1>Enter Password</h1>
                    <form onSubmit={handlePasswordSubmit}>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </>
    );

};

export default CreatePost;