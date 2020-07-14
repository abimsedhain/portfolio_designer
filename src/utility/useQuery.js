// takes in useLocation() as input and parses the query
// and parses query from URL
const useQuery = (useLocation) => {
	return new URLSearchParams(useLocation.search);
};

export default useQuery;

