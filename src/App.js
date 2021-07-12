import React from "react";

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';
import Container from "./components/container/Container";

const App = () => {
  return (
  <div>
    <Container>
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
         title="Upload stats" stats={statisticalData}
      />
      <Statistics
         stats={statisticalData}
      />
      <FriendList 
        friends={friends}
      />
      <TransactionHistory 
        items={transactions}
      />
    </Container>
  </div>
  );
};

export default App;
