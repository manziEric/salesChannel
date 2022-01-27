
interface TablleData {
  key: string,
  label:string,
  country: string
}

const useGetCurrentPosts = ({currentPage, postsPerPage, tableData}:{currentPage: number, postsPerPage:number, tableData:TablleData[]}) => {

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts: number = tableData.length;

  return [currentPosts,totalPosts];
};

export default useGetCurrentPosts;
