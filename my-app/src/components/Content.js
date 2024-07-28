import React, { Component } from 'react'
import css from './css/Content.module.css';
import { savedPosts } from '../posts.json'
import PostItem from './PostItem';
import Loader from './Loader';



export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)

    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name);
        })
        this.setState({
            posts: filteredPosts
        })
    }
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TtitleBar}>
                    <h1>My Posts</h1>
                    <form>
                        <label htmlFor='searchInput'>Search:</label>
                        <input 
                        onChange={(e) => this.handleChange(e)}
                        type='search' 
                        id='searchInput' 
                        /> 
                    </form>
                    <h4>posts found: {this.state.posts.length}</h4>
                    
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                            <PostItem savedPosts={this.state.posts} />
                            : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content