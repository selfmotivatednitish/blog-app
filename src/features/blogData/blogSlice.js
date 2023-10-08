import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "Asia Cup",
      category: "Cricket",
      description: "Today I watched India vs Pakistan Match. I had a lot of Fun and India won. Happy Moments!!",
    },
    {
      id: "2",
      title: "Best place to visit in Etawah",
      category: "Travel Blog",
      description: "Living in Etawah which is Famous for Many Places And Things It's situated on Hilly Area. Places you can visit here are 1. Lion Safari better known As Safari Park 2. Raja Sumer Singh Fort 3. Tikshi Temple and so on absolutely Great place to visit.",
    },
    {
      id: "3",
      title: "Chandrayaan-3: India's Next Leap in Lunar Exploration",
      category: "Space Exploration",
      description: "India's space agency, the Indian Space Research Organisation (ISRO), has been making remarkable strides in space exploration over the past few years. One of their most ambitious projects to date is Chandrayaan-3, the third installment of India's lunar exploration program. Building on the successes of Chandrayaan-1 and Chandrayaan-2, Chandrayaan-3 aims to further expand our understanding of the Moon and advance India's capabilities in space exploration.",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      console.log(state.blogs);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === (id));
      console.log("===========blogIndex=========");
      console.log(blogIndex);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
      console.log("===========blogTitle=========");
      console.log(state.blogs[blogIndex].title);
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  console.log("=======Blog ID :=========");
  console.log(blogID);
  console.log("===========Blogs Content=========");
  console.log(state.blogs.blogs);
  console.log("===========blogID typeof=========");
  console.log(typeof Number(blogID));
  const number = blogID;
  console.log("=========TypeOf blog.title =============");
  console.log(typeof String(state.blogs.blogs.title));
  const test = state.blogs.blogs.find((blog) => blog.id === number);
  console.log(test);
  return state.blogs.blogs.find((blog) => blog.id === (blogID));
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
