import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';
import { GET_BOOKS } from '../pages/query'

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache: cache,
    uri: 'http://localhost:4000/',
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore'
        },
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
          },
        mutate: {
            errorPolicy: 'all',
        },
    },
});

type Book = {
    id: number
    title: string
    author: string
}

const Book = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
    
    if (loading) return <p>...loading</p>;
    if (error) return <p>{ error.message }</p>;

    return (
        <div>
            <h2>見積依頼</h2>
            { 
                data.books.map((book: Book) => (
                <p key={book.id}>{book.title}: {book.author}</p>
                ))
            }
        </div>
    )
}

class Estimation extends React.Component {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <ApolloProvider client={client}>
                    <Book></Book>
                </ApolloProvider>
                <p>見積もり登録ページ</p>
            </React.Fragment>
        )
    }
}

export default Estimation