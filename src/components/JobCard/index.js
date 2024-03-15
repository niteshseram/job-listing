import {
  CardContainer,
  ChipWrapper,
  CompanyName,
  Divider,
  FeaturedChip,
  HeadingInfo,
  JobDetails,
  JobInfo,
  JobLogo,
  JobMetaData,
  JobTitle,
  NewChip,
  Tag,
  TagsWrapper,
} from "./JobCard.styled";

export default function JobCard({ data, addTag }) {
  const {
    company,
    logo,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    new: isNew,
  } = data;
  return (
    <CardContainer isFeatured={featured}>
      <JobDetails>
        <JobLogo src={logo} alt={`${company}'s logo`} />
        <JobInfo>
          <HeadingInfo>
            <CompanyName>{company}</CompanyName>
            <ChipWrapper>
              {isNew && <NewChip>NEW!</NewChip>}
              {featured && <FeaturedChip>FEATURED</FeaturedChip>}
            </ChipWrapper>
          </HeadingInfo>
          <JobTitle>{position}</JobTitle>
          <JobMetaData>
            <div>{postedAt}</div>
            <Divider />
            <div>{contract}</div>
            <Divider />
            <div>{location}</div>
          </JobMetaData>
        </JobInfo>
      </JobDetails>
      <TagsWrapper>
        {languages.map((item) => (
          <Tag key={item} onClick={() => addTag(item)}>
            {item}
          </Tag>
        ))}
      </TagsWrapper>
    </CardContainer>
  );
}
