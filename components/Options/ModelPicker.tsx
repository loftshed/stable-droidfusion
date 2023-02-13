import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getModelList} from '../../utils/api';

interface ModelPickerProps {}

export default function ModelPicker({}: ModelPickerProps): JSX.Element {
  const [modelList, setModelList] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    const models = getModelList();
    console.log(models);
  }, []);

  return <Picker />;

  // return (
  //   <Picker
  //     selectedValue={selectedModel}
  //     onValueChange={(value, index) => setSelectedLanguage(value)}></Picker>
  // );
}
