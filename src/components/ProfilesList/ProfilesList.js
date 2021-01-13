import React from 'react';

import ProfileCard from '../ProfileCard/ProfileCard';

import './ProfilesList.scss';

const ProfilesList = ({ profiles, loading }) => {

  return (
    <section className='section-profiles-list u-margin-bottom-large'>
      {loading ? <h2>Loading...</h2> :
        <ul className='profiles-list'>
          {profiles.map(profile =>
            <ProfileCard profile={profile} key={profile.PhoneNumber} />
          )}
        </ul>
      }
    </section>
  )

}

export default ProfilesList;