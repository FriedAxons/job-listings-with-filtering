import JobItem from "./JobItem";
import "../styles/JobItem.css";
import { JobListPropTypes } from "./propTypes";

/* 
This component receives the list of jobs (filtered based on active filters) from App.jsx and displays them 
This component loops through the filtered jobs (using .map) and passes each job to a JobItem component.
If no filters are applied, all jobs are displayed.
It passes the addFilter function down to the JobItem component so that clicking on job tags can add a filter.
*/
function JobList({ jobs, filters, addFilter }) {
  // If no filters are active, all jobs are shown
  const filteredJobs = jobs.filter((job) => {
    if (filters.length === 0) return true;
    const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobFilters.includes(filter));
  });

  return (
    <div className="job-list">
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} addFilter={addFilter} />
      ))}
    </div>
  );
}

JobList.propTypes = JobListPropTypes;

export default JobList;
