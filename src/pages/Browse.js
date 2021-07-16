import BrowseContainer from "../containers/BrowseContainer";
import useContent from "../utils/firebaseQuery";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slidesFiltered = selectionFilter({ series, films });
  return (
    <>
      <BrowseContainer slides={slidesFiltered} />
      {/*
            <ProfileSlectionPage /> 
            */}
    </>
  );
}
