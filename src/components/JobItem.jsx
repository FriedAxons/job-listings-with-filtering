import "../styles/JobItem.css";
import { JobItemPropTypes } from "./propTypes";

function JobItem({ job, addFilter }) {
  // Determine the class name based on job status
  const containerClass = job.new && job.featured ? "highlighted" : "";

  return (
    <div className={`job-item ${containerClass}`}>
      <img src={job.logo} alt={`${job.company} logo`} />
      <div className="info-container">
        <div className="company-header">
          <p>{job.company}</p>
          {/* Add 'closer' class if only new */}
          {job.new && !job.featured && <p className="new closer">NEW!</p>}
          {job.featured && <p className="featured">FEATURED</p>}
          {job.new && job.featured && <p className="new">NEW!</p>}
          {/* Keep existing for both flairs */}
        </div>
        <h3>{job.position}</h3>
        <div className="position-and-time-container">
          <p>{job.postedAt}</p>
          <p className="dot">&#x2022;</p>
          <p>{job.contract}</p>
          <p className="dot">&#x2022;</p>
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

JobItem.propTypes = JobItemPropTypes;

export default JobItem;
