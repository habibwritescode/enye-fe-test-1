import React, { useEffect, useState } from 'react';

import './App.scss';

import Filter from './components/Filter/Filter';
import Pagination from './components/Pagination/Pagination';
import SearchBox from './components/SearchBox/SearchBox';
import ProfilesList from './components/ProfilesList/ProfilesList';

function App() {
  const [fetchedProfiles, setFetchedProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);
  const [activeLink, setActiveLink] = useState(currentPage);
  const [filteredProfiles, setFilteredProfiles] = useState([]);


  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true)
      const res = await fetch(`http://api.enye.tech/v1/challenge/records`);
      const jsonResponse = await res.json();
      setFetchedProfiles(jsonResponse.records.profiles);
      setLoading(false);
    }

    fetchProfiles()
  }, [])

  const handleSearchInputChange = (e) => {
    setFilteredProfiles([])
    setSearchQuery(e.target.value);
    setCurrentPage(1)
    setActiveLink(1)
  }

  const searchedProfiles = fetchedProfiles.filter(profile => {
    const fullName = profile.FirstName + profile.LastName;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase())
  })


  // Get current profiles
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;

  const currentSearchedProfiles = searchedProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  const currentFilteredProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const currentProfiles = currentFilteredProfiles.length > 1 ? currentFilteredProfiles : currentSearchedProfiles;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setActiveLink(pageNumber)
  };

  const handleSelectFilteredProfiles = (profiles) => {
    setCurrentPage(1)
    setActiveLink(1)
    setFilteredProfiles(profiles)
  }

  return (
    <div className="App">
      <header className="App-header u-margin-bottom-medium">
        <div className='header-text'>
          <h1 className='heading'>Enye Front-end test Phase 1.1</h1>
          <p>by Habib Afolabi</p>
        </div>
      </header>
      <SearchBox handleChange={handleSearchInputChange} />
      <section className='filter-container u-margin-bottom-medium'>
        <Filter label={'Gender'} options={['Male', 'Female', 'Prefer to skip']} profiles={fetchedProfiles} handleSelect={handleSelectFilteredProfiles} />
        <Filter label={'PaymentMethod'} options={['money order', 'cc', 'check', 'paypal']} profiles={fetchedProfiles} handleSelect={handleSelectFilteredProfiles} />
      </section>
      <ProfilesList profiles={currentProfiles} loading={loading} />
      <Pagination profilesPerPage={profilesPerPage} totalProfiles={filteredProfiles.length || searchedProfiles.length} paginate={paginate} activeLink={activeLink} />
    </div>
  );
}

export default App;
