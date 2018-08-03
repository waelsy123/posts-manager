import { getAllPosts, getPost } from './callApi';

describe('Fetch Posts', () => {
  const postNr1 = {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  };

  it('should fetch all posts successfully', async () => {
    await getAllPosts(posts => {
      expect(posts.length).toEqual(100);
      expect(posts[0]).toEqual(postNr1);
    });
  });

  it('should fetch first post successfully', () => {
    getPost('1', post => {
      expect(post).toMatchObject(postNr1);
    });
  });

})

