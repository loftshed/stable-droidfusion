import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {SDConfig} from '../../schemas/config';
import {getModelList, setConfig} from '../../utils/api';
import {useForm} from 'react-hook-form';

interface ModelPickerProps {}

export default function ModelPicker({}: ModelPickerProps): JSX.Element {
  const [modelList, setModelList] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  // pretty print form
  // console.log(form.setValue('model_name'));

  useEffect(() => {
    async function fetchData() {
      const models = await getModelList();
      setModelList(models);
    }
    fetchData();
  }, []);

  const handleSelectModel = async (value: string) => {
    setSelectedModel(value);
    return setConfig({
      sd_model_checkpoint: value,
    });
  };

  return (
    <Picker
      onValueChange={(value: string) => handleSelectModel(value)}
      selectedValue={selectedModel}>
      {modelList.map(({model_name}, index) => {
        const modelName: string = model_name;
        const key = `${modelName.slice(0, 20)}-${index}`;
        return <Picker.Item key={key} label={modelName} value={modelName} />;
      })}
    </Picker>
  );
}
