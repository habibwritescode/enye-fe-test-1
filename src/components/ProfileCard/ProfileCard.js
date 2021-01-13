import React from 'react';

import './ProfileCard.scss';

const ProfileCard = ({ profile }) => {

  return (
    <li className='profile-card u-margin-bottom-medium'>
      <p>{`First name: ${profile.FirstName}`}</p>
      <p>{`Last name:  ${profile.LastName}`}</p>
      <p>{`Username:  ${profile.UserName}`}</p>
      <p>{`Email:  ${profile.Email}`}</p>
      <p>{`Phone No:  ${profile.PhoneNumber}`}</p>
      <p>{`Gender: ${profile.Gender}`}</p>
      <p>{`Credit card number: ${profile.CreditCardNumber}`}</p>
      <p>{`Credit card type: ${profile.CreditCardType}`}</p>
      <p>{`Payment method: ${profile.PaymentMethod}`}</p>
      <p>{`Domain name:  ${profile.DomainName}`}</p>
      <p>{`Mac address: ${profile.MacAddress}`}</p>
      <p>{`Last login: ${profile.LastLogin}`}</p>
      <p>{`Latitude: ${profile.Latitude}`}</p>
      <p>{`Longitude: ${profile.Longitude}`}</p>
      <p>{`Url: ${profile.URL}`}</p>
    </li>
  )

}

export default ProfileCard;