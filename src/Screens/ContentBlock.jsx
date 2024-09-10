import React from 'react';

const ContentBlock = ({ content }) => {
  return (
    <div className="p-4 border mb-4 rounded-md shadow-sm">
      <h4 className="text-xl font-bold">{content.name}</h4>
      <p>{content.description}</p>
      <p><strong>Mission:</strong> {content.mission}</p>
      <p><strong>Vision:</strong> {content.vision}</p>
      <p><strong>Values:</strong> {content.values}</p>
      {content.image && (
        <img src={content.image} alt="Company Logo" className="mt-2 h-16 w-16 object-cover" />
      )}
    </div>
  );
};

export default ContentBlock;
