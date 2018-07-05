import React from 'react';
import { getNews } from '../actions/news';
import Loading from '../components/Loading';
import { SearchBar } from '../containers/SearchBar';

class NewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { news: [], initValues: [], isLoading: true };

        this.doFetch = this.doFetch.bind(this);
        this.filterResults = this.filterResults.bind(this);
    }

    componentDidMount() {
        this.doFetch();
    }

    doFetch() {
        return getNews().then(news => (
            this.setState({ news, initValues: news, isLoading: true })
        ));
    }

    filterResults(value) {
        const filteredPosts = this.state.initValues.filter(post => {
            // Return the filtered posts without case sensitive
            return post;
        });

        return this.setState({ news: filteredPosts });
    }

    render() {
        if (this.state.isLoading) {
            return <Loading loading={this.state.isLoading} />
        }

        return (
            <article className="newsList">
                <h1>News List</h1>

                <SearchBar filterResults={this.filterResults} />

                {!!this.state.news.length &&
                    <div className="noResults">No results found</div>
                }

                {this.state.news.map(post => (
                    <div className="new">
                        <div className="title">
                            {post.title}
                        </div>

                        <div className="content">
                            {post.content}
                        </div>

                        <div className="footer">
                            <span>Author: {post.author}</span>
                            <span>Date Created: {post.dateCreated}</span>
                        </div>
                    </div>
                ))}
            </article>
        )
    }
}

export default NewsList;
