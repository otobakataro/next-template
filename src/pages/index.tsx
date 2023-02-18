import React from 'react';
import Link from 'next/link'
import Header from './header';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
        <React.Fragment>
          <Header />
          <Link href="/estimation">
            見積書の登録
          </Link>
        </React.Fragment>
    );
  }
}

export default Home;