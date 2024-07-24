import React from 'react';
import LinkedList from './LinkedList';
import '../styles.css';

const MainComponent: React.FC = () => {
  const node6 = { val: 6, next: null, child: null };
  const node5 = { val: 5, next: node6, child: null };
  const node4 = { val: 4, next: null, child: null };
  const node3 = { val: 3, next: node4, child: null };
  const node2 = { val: 2, next: node3, child: node5 };
  const node1 = { val: 1, next: node2, child: null };

  return (
    <div className="app">
      <h1>Nested Linked List</h1>
      <LinkedList head={node1} />
    </div>
  );
};

export default MainComponent;
