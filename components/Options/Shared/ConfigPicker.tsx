import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {SDConfig} from '../../../schemas/config';
import {setConfig} from '../../../utils/api';

// pas encore assez generique mais on y travaille
interface ConfigPickerProps {
  name: string;
  setOption: (value: string) => void;
  getOptions: () => Promise<string[]>;
}

export default function ConfigPicker({
  name,
  setOption,
  getOptions,
}: ConfigPickerProps): JSX.Element {
  const [pickerOptions, setPickerOptions] = useState(['']);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    async function fetchData() {
      const options = await getOptions();
      setPickerOptions(options);
    }
    fetchData();
  }, [getOptions]);

  const handleSelectOption = async (value: string) => {
    setSelectedOption(value);
    const payload: SDConfig = {
      sd_model_checkpoint: value,
    };
    return setConfig(payload);
  };

  return (
    <Picker
      onValueChange={(value: string) => handleSelectOption(value)}
      selectedValue={selectedOption}>
      {pickerOptions.map(({name}, index) => {
        const selectedOption: string = name;
        const key = `${selectedOption.slice(0, 20)}-${index}`;
        return (
          <Picker.Item
            key={key}
            label={selectedOption}
            value={selectedOption}
          />
        );
      })}
    </Picker>
  );
}
