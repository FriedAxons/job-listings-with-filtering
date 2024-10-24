import PropTypes from "prop-types";

// PropTypes for JobItem component
export const JobItemPropTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    logo: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    new: PropTypes.bool,
    featured: PropTypes.bool,
  }).isRequired,
  addFilter: PropTypes.func.isRequired,
};

// PropTypes for FilterBar component
export const FilterBarPropTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

// PropTypes for JobList component
export const JobListPropTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFilter: PropTypes.func.isRequired,
};
