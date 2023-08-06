interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className='Tags'>
          <div className='Tags-header'><span>EXPLORE TAGS</span><a>MORE TAGS +</a></div>
          <div className='Tags-container'> 
            {tags.map((tag, index) => (
              <a className='Tag' href='/'>
                <div key={index} className='Tag-title'>
                  <div className='Tag-name'>{tag}</div>
                  <div className='Tag-posts'>4,991 Posts</div>
                </div>
              </a>
            ))}
          </div>
      </div>
  );
};

export default Tags;
