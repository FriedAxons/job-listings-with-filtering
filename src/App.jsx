import { useEffect, useState } from "react";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import "./styles/App.css";

function App() {
  // Step 1: Define state for jobs and filters
  const [jobs, setJobs] = useState([]); // 'jobs' stores the list of job data
  const [filters, setFilters] = useState([]); // 'filters' stores the list of active filters

  // Step 2: Fetch the job data when the component loads
  useEffect(() => {
    fetch("/job-listings-with-filtering/data.json") // Fetch job data from a local file
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setJobs(data)) // Store the job data in the 'jobs' state
      .then((error) => console.error("Error fetching jobs:", error));
  }, []); // Empty dependency array means this only runs once when the component mounts

  // Step 3: Functions to manage filters
  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter)); // Remove a specific filter
  };

  const clearFilters = () => {
    setFilters([]); // Clear all filters
  };

  // Step 4: Filter the jobs based on the active filters
  const filteredJobs = jobs.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobTags.includes(filter)); // Only show jobs that match all filters
  });

  return (
    <div className="App">
      <div className="top-banner"></div>
      {/* Step 5: Show the filter bar if filters are active */}
      {filters.length > 0 && (
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
      )}
      {/* Step 6: Pass the filtered jobs and addFilter function to the JobList */}
      <JobList jobs={filteredJobs} filters={filters} addFilter={addFilter} />
    </div>
  );
}

export default App;
