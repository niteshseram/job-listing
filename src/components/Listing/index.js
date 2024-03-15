import JobCard from "../JobCard";
import { ListingContainer, ListingContent } from "./Listing.styled";

import data from "../../data.json";
import { useState } from "react";
import Filter from "../Filter";

export default function Listing() {
  const [filterTags, setFilterTags] = useState([]);

  const removeTag = (value) => {
    setFilterTags(filterTags.filter((tag) => tag !== value));
  };

  const removeAll = () => {
    setFilterTags([]);
  };

  const addTag = (value) => {
    if (filterTags.includes(value)) {
      return;
    }
    setFilterTags((prev) => [...prev, value]);
  };

  const filteredJobs =
    filterTags.length === 0
      ? data
      : data.filter((job) =>
          filterTags.every((tag) =>
            [...job.languages, ...job.tools].includes(tag)
          )
        );

  return (
    <ListingContainer>
      <Filter
        filterTags={filterTags}
        removeTag={removeTag}
        removeAll={removeAll}
      />
      <ListingContent>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} data={job} addTag={addTag} />
        ))}
      </ListingContent>
    </ListingContainer>
  );
}
