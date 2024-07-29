import axios from 'axios'
import API_KEY from '../secrets'

import React, { Component } from 'react'
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';



export class ContentAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        }
    }

    componentDidMount() {
            this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name);
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

export default ContentAPI