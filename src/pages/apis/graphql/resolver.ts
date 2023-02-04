type Book = {
    id: number
    title: string
    author: string
}

const books: Book[] = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
  
export const resolvers = {
    Query: {
        books: () => books,
        book: (id: number) => books.find((book) => book.id = id)
    },
};