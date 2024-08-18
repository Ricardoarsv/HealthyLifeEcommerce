import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import apiUrl from '../utils/getApiUrl';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';

const Filters = ({ handleShowFilteredProducts, handleAlertModal }) => {
  const [Profiles, setProfiles] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    macronutrient: null,
    gluten: null,
  });
  const [selectedProfile, setSelectedProfile] = useState('custom');

  useEffect(() => {
    fetch(`${apiUrl}/profiles/getProfiles`)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleGetRecomendations = () => {
    const user = selectedProfile;
    const mappedPreferences = {
      gluten_free: selectedFilters.gluten?.value,
      macronutrient: selectedFilters.macronutrient?.value,
    };
    const missingOptions = [];
    console.log(mappedPreferences);

    if (mappedPreferences.gluten_free === undefined) {
      missingOptions.push('gluten');
    }
    if (mappedPreferences.macronutrient === undefined) {
      missingOptions.push('macronutrient');
    }

    if (missingOptions.length > 0) {
      handleAlertModal(
        `Please select the following options: ${missingOptions.join(', ')}`
      );
      return;
    }

    fetch(`${apiUrl}/preferences/getRecomendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user === 'custom' ? 11 : user,
        preferences: mappedPreferences,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleShowFilteredProducts(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleFilterSelection = (filter, option) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: option,
    }));
    setSelectedProfile('custom');
  };

  const handleProfileSelection = (selectedOption) => {
    setSelectedProfile(selectedOption.value);
    if (selectedOption.value !== 'custom') {
      const profile = Profiles.find(
        (profile) => profile.user_id === selectedOption.value
      );

      if (profile) {
        setSelectedFilters({
          macronutrient: options.macronutrient.find(
            (opt) => opt.value === profile.preferences.macronutrient
          ),
          gluten: profile.preferences.gluten_free
            ? options.gluten[0] // Libre de gluten
            : options.gluten[1], // Contiene gluten
        });
      }
    }
  };

  const options = {
    macronutrient: [
      { value: 'Protein', label: 'Proteínas' },
      { value: 'Carbs', label: 'Carbohidratos' },
      { value: 'Fat', label: 'Grasas' },
    ],
    gluten: [
      { value: true, label: 'Libre de gluten' },
      { value: false, label: 'Contiene gluten' },
    ],
    profiles: Profiles.map((profile, index) => ({
      value: profile.user_id,
      label: `Profile ${index + 1}`,
    })).concat([{ value: 'custom', label: 'Custom' }]),
  };

  return (
    <div className="flex flex-col md:flex-row bg-white justify-between mt-10 items-center gap-4 font-sans w-full p-4 rounded-md border-2 shadow-md">
      <div className="flex flex-row gap-2 justify-between items-center">
        <label>Perfiles:</label>
        <Select
          className="w-40"
          value={options.profiles.find(
            (profile) => profile.value === selectedProfile
          )}
          onChange={handleProfileSelection}
          options={options.profiles}
          placeholder="Selecciona"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetRecomendations}
          className="bg-primary font-bold text-white rounded-md p-2"
        >
          Search
        </motion.button>
        <FontAwesomeIcon
          onClick={() => {
            setSelectedProfile('custom');
            setSelectedFilters({
              macronutrient: null,
              gluten: null,
            });
            handleShowFilteredProducts([]);
          }}
          className="text-primary cursor-pointer w-8 h-8 hover:text-secondary transition-all duration-300"
          icon={faRecycle}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex flex-row gap-2 justify-between w-full items-center">
          <label>Macronutrientes:</label>
          <Select
            className="w-40"
            value={selectedFilters.macronutrient}
            onChange={(option) =>
              handleFilterSelection('macronutrient', option)
            }
            options={options.macronutrient}
            placeholder="Selecciona"
          />
        </div>
        <div className="flex flex-row gap-2 justify-between w-full items-center">
          <label>Gluten:</label>
          <Select
            className="w-40"
            value={selectedFilters.gluten}
            onChange={(option) => handleFilterSelection('gluten', option)}
            options={options.gluten}
            placeholder="Selecciona"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
