import { useState } from "react";
import ErrorCard from "../components/ErrorCard";
import PathLayout from "../components/PathLayout";
import { useGetLocations } from "../queries/locations";
import ListGrid from "../components/ListGrid";
import PaginationNav from "../components/PaginationNav";

const Locations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useGetLocations(currentPage);

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="All locations" currentPage={currentPage}>
      <ListGrid
        loading={loading}
        uriPath="location"
        locations={data?.locations.results}
      />
      <PaginationNav
        nextPage={data?.locations.info.next}
        prevPage={data?.locations.info.prev}
        pagesCount={data?.locations.info.pages}
        handlePageSwitch={(pageNr: number) => setCurrentPage(pageNr)}
      />
    </PathLayout>
  );
};

export default Locations;
