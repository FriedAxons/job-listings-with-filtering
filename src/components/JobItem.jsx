import PropTypes from "prop-types";
import "../styles/JobItem.css";

function JobItem({ job, addFilter }) {
  return (
    <div className="job-item">
      <img src={job.logo} alt={`${job.company} logo`} />
      <div className="info-container">
        <div className="company-header">
          <p>{job.company}</p>
          {job.new && <p>NEW</p>}
          {job.featured && <p>FEATURED</p>}
        </div>
        <h3>{job.position}</h3>
        <div className="position-and-time-container">
          <p>{job.postedAt}</p>
          <p>{job.contract}</p>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="job-tags">
        {/* Each tag adds a filter when clicked */}
        <button onClick={() => addFilter(job.role)}>{job.role}</button>
        <button onClick={() => addFilter(job.level)}>{job.level}</button>
        {job.languages.map((lang) => (
          <button key={lang} onClick={() => addFilter(lang)}>
            {lang}
          </button>
        ))}
        {job.tools.map((tool) => (
          <button key={tool} onClick={() => addFilter(tool)}>
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}

JobItem.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default JobItem;
