import FilterTag from "../FilterTag";
import {
  ClearButton,
  FilterContainer,
  FilterTagsWrapper,
} from "./Filter.styled";

export default function Filter({ filterTags, removeTag, removeAll }) {
  if (filterTags.length === 0) {
    return null;
  }

  return (
    <FilterContainer>
      <FilterTagsWrapper>
        {filterTags.map((tag) => (
          <FilterTag label={tag} onClick={() => removeTag(tag)} />
        ))}
      </FilterTagsWrapper>
      <ClearButton onClick={removeAll}>Clear</ClearButton>
    </FilterContainer>
  );
}
