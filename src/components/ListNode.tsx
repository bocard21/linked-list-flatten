import React from 'react';

interface ListNodeProps {
  node: {
    val: number;
  };
}

const ListNode: React.FC<ListNodeProps> = ({ node }) => {
  return (
    <div className="node">
      <span>{node.val}</span>
    </div>
  );
};

export default ListNode;
