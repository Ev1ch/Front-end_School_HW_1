import React from 'react';
import { Header, TikTukPost } from 'components';
import { ITikTuk } from 'types/tiktuk';
import styles from './trending.module.scss';

interface ITrendingPageProps {
  tiktuks: ITikTuk[];
}

const TrendingPage = function TrendingPage({ tiktuks }: ITrendingPageProps) {
  return (
    <div className="trending-page">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <ul className={styles.tiktuks}>
            {tiktuks.map((tiktuk: ITikTuk) => (
              <li>
                <TikTukPost tiktuk={tiktuk} key={tiktuk.id} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TrendingPage;
