import { BlogSectionFooter, BlogSectionHeader } from "./helpers";

const Blog = () => {
  return (
    <div>
      {BlogSectionHeader.title}
      <div>
        {BlogSectionFooter.colors.map((item) => (
          <div style={{ color: `${item.color}` }}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
