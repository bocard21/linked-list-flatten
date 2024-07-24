import React, { useState } from 'react';
import ListNode from './ListNode';

interface ListNode {
  val: number;
  next: ListNode | null;
  child: ListNode | null;
}

interface LinkedListProps {
  head: ListNode;
}

const LinkedList: React.FC<LinkedListProps> = ({ head }) => {
  const [flattenedList, setFlattenedList] = useState<ListNode[]>([]);

  const flatten = (node: ListNode | null): ListNode[] => {
    const result: ListNode[] = [];
    const helper = (current: ListNode | null) => {
      while (current) {
        result.push(current);
        if (current.child) {
          helper(current.child);
        }
        current = current.next;
      }
    };
    helper(node);
    return result;
  };

  const handleFlatten = () => {
    setFlattenedList(flatten(head));
  };

  return (
    <div className="linked-list">
      <button onClick={handleFlatten}>Flatten List</button>
      <div className="list">
        {flattenedList.map((node, index) => (
          <ListNode key={index} node={node} />
        ))}
      </div>
    </div>
  );
};

export default LinkedList;
