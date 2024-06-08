import React, { useState } from 'react';
import DropdownFilter from './DropdownFilter';
import { UserIcon, MapIcon, CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/solid';

const Filter = () => {
  const [gender, setGender] = useState('Both');
  const [location, setLocation] = useState('Nearby');
  const [rent, setRent] = useState([0, 1000]);
  const [date, setDate] = useState(new Date());
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeOtherDropdowns = () => {
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <div className="flex gap-4  flex-wrap items-center">
      <DropdownFilter
        label="Gender"
        type="select"
        options={['Male', 'Female', 'Both']}
        selected={gender}
        setSelected={setGender}
        isOpen={openDropdown === 'gender'}
        toggleDropdown={() => toggleDropdown('gender')}
        closeDropdown={() => setOpenDropdown(null)}
        icon={UserIcon}
      />
      <DropdownFilter
        label="Location"
        type="select"
        options={['Nearby', 'Delhi', 'Mumbai']}
        selected={location}
        setSelected={setLocation}
        isOpen={openDropdown === 'location'}
        toggleDropdown={() => toggleDropdown('location')}
        closeDropdown={() => setOpenDropdown(null)}
        icon={MapIcon}
      />
      <DropdownFilter
        label="Rent"
        type="slider"
        selected={rent}
        setSelected={setRent}
        isOpen={openDropdown === 'rent'}
        toggleDropdown={() => toggleDropdown('rent')}
        closeDropdown={() => setOpenDropdown(null)}
        icon={CurrencyDollarIcon}
      />
      <DropdownFilter
        label="Date"
        type="date"
        selected={date}
        setSelected={setDate}
        isOpen={openDropdown === 'date'}
        toggleDropdown={() => toggleDropdown('date')}
        closeDropdown={() => setOpenDropdown(null)}
        icon={CalendarIcon}
      />
    </div>
  );
};

export default Filter;
