export const data =async (postId) =>{
  const fetchingApi = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);


  return fetchingApi.json();
}