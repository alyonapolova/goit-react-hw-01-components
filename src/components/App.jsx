import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export const App = () => {
  return (
    <>
      1 - Profile in social media
      <Profile user={user} />2 - Statistic section
      <Statistics title="Upload stats" stats={data} />
      3 - Friends list
      <FriendList friends={friends} />
    </>
  );
};
