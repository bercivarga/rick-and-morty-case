import { useState } from "react";
import ErrorCard from "../components/ErrorCard";
import PaginationNav from "../components/PaginationNav";
import PathLayout from "../components/PathLayout";
import { useGetEpisodes } from "../queries/episodes";
import ListGrid from "../components/ListGrid";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useGetEpisodes(currentPage);

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="All episodes" currentPage={currentPage}>
      <ListGrid
        loading={loading}
        uriPath="episode"
        episodes={data?.episodes.results}
      />
      <PaginationNav
        prevPage={data?.episodes.info.prev}
        nextPage={data?.episodes.info.next}
        pagesCount={data?.episodes.info.pages}
        handlePageSwitch={(pageNr: number) => setCurrentPage(pageNr)}
      />
    </PathLayout>
  );
};

export default Episodes;
