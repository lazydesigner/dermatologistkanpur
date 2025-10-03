class BlogAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
  }

  // Get all blog posts with pagination and filters
  async getPosts(options = {}) {
    const {
      page = 1,
      limit = 10,
      search = '',
      category = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = options;
 
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search }),
      ...(category && { category }),
      sortBy,
      sortOrder
    });

    try {
      const response = await fetch(`${this.baseUrl}/api/public/blogs?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  // Get a single blog post by slug
  async getPost(slug) {
    try {
      const response = await fetch(`${this.baseUrl}/api/public/blogs/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Blog post not found');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  }

  // Search blog posts
  async searchPosts(query, options = {}) {
    const { page = 1, limit = 10 } = options;
    
    const params = new URLSearchParams({
      q: query,
      page: page.toString(),
      limit: limit.toString()
    });

    try {
      const response = await fetch(`${this.baseUrl}/api/public/blogs/search?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching posts:', error);
      throw error;
    }
  }

  // Get all categories
  async getCategories() {
    try {
      const response = await fetch(`${this.baseUrl}/api/public/blogs/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  // Get recent posts
  async getRecentPosts(limit = 3) {
    try {
      const response = await fetch(`${this.baseUrl}/api/public/blogs/recent?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      throw error;
    }
  }
}

export default BlogAPI;