import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {AdvancedOptions} from '../../../schemas/config';
import {setConfig} from '../../../utils/api';
import {Text} from '../../Styled';
import {View, StyleSheet} from 'react-native';
import {useFormContext} from 'react-hook-form';
import {COLORS} from '../../../utils/constants';

interface ConfigPickerProps {
  label?: string;
  endpoint: () => Promise<string[]>;
  reqKey: string;
  style?: object;
  isForm?: boolean;
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: COLORS.bgDark,
    borderRadius: 15,
  },
});

/**
 * @param {string} label - Label for the picker
 * @param {function} endpoint - Function that returns a list of options
 * @param {string} reqKey - Key for the request body
 * @param {object} style - Optional style object for the View wrapping the picker
 * @param {boolean} isForm - Whether the picker is in a form
 */
export default function ConfigPicker({
  label,
  endpoint,
  reqKey,
  style,
  isForm,
}: ConfigPickerProps): JSX.Element {
  const [pickerOptions, setPickerOptions] = useState(['']);
  const [selectedOption, setSelectedOption] = useState('');
  const {setValue} = useFormContext();

  useEffect(() => {
    async function fetchData() {
      const options = await endpoint();
      setPickerOptions(options);
    }
    fetchData();
  }, [endpoint]);

  const handleSelectOption = async (value: string) => {
    setSelectedOption(value);
    if (isForm) {
      setValue(reqKey, value);
      return;
    }
    const payload: AdvancedOptions = {
      [reqKey]: value,
    };
    return setConfig(payload);
  };

  return (
    <View style={style}>
      {label && <Text content={label} />}
      <Picker
        style={styles.picker}
        onValueChange={(value: string) => handleSelectOption(value)}
        selectedValue={selectedOption}>
        {pickerOptions.map((option, index) => {
          const key = `${selectedOption.slice(0, 20)}-${index}`;
          return <Picker.Item key={key} label={option} value={option} />;
        })}
      </Picker>
    </View>
  );
}
