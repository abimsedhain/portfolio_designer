// takes in useLocation() as input and parses the query
const useQuery = (useLocation) => {
	return new URLSearchParams(useLocation.search);
}
 
export default useQuery;