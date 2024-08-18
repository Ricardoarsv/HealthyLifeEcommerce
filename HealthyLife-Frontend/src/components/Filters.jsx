import React, { useState } from 'react';
import Select from 'react-select';
import Profiles from '../../mock/Profiles.json';

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    grasas: null,
    proteina: null,
    gluten: null,
    carbohidratos: null,
  });
  const [selectedProfile, setSelectedProfile] = useState('custom');

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
      setSelectedFilters({
        grasas: profile.preferences.high_fat
          ? options.grasas[0]
          : options.grasas[1],
        proteina: profile.preferences.high_protein
          ? options.proteina[0]
          : options.proteina[1],
        gluten: profile.preferences.gluten_free
          ? options.gluten[0]
          : options.gluten[1],
        carbohidratos: profile.preferences.carbohydrates
          ? options.carbohidratos[0]
          : options.carbohidratos[1],
      });
    }
  };

  const options = {
    grasas: [
      { value: 'alto', label: 'Alto' },
      { value: 'bajo', label: 'Bajo' },
    ],
    proteina: [
      { value: 'alto', label: 'Alto' },
      { value: 'bajo', label: 'Bajo' },
    ],
    gluten: [
      { value: 'libre', label: 'Libre' },
      { value: 'contiene', label: 'Contiene' },
    ],
    carbohidratos: [
      { value: 'alto', label: 'Alto' },
      { value: 'bajo', label: 'Bajo' },
    ],
    profiles: Profiles.map((profile, index) => ({
      value: profile.user_id,
      label: `Profile ${index + 1}`,
    })).concat([{ value: 'custom', label: 'Custom' }]),
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 items-center gap-4 font-sans w-full p-4 rounded-md border-2">
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
        <button className="bg-primary font-bold text-white rounded-md p-2">
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex flex-row gap-2 justify-between w-full items-center">
          <label>Grasas:</label>
          <Select
            className="w-40"
            value={selectedFilters.grasas}
            onChange={(option) => handleFilterSelection('grasas', option)}
            options={options.grasas}
            placeholder="Selecciona"
          />
        </div>
        <div className="flex flex-row gap-2 justify-between w-full items-center">
          <label>Proteína:</label>
          <Select
            className="w-40"
            value={selectedFilters.proteina}
            onChange={(option) => handleFilterSelection('proteina', option)}
            options={options.proteina}
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
        <div className="flex flex-row gap-2 justify-between w-full items-center">
          <label>Carbohidratos:</label>
          <Select
            className="w-40"
            value={selectedFilters.carbohidratos}
            onChange={(option) =>
              handleFilterSelection('carbohidratos', option)
            }
            options={options.carbohidratos}
            placeholder="Selecciona"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
