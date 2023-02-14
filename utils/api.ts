import type {SDConfig, Txt2ImgPayload} from '../schemas/';

const IP = '192.168.50.39';
const PORT = '7860';

const getImages = async (payload: Txt2ImgPayload) => {
  try {
    const response = await fetch(`http://${IP}:${PORT}/sdapi/v1/txt2img`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const setConfig = async (payload: SDConfig) => {
  try {
    const response = await fetch(`http://${IP}:${PORT}/sdapi/v1/options`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getConfig = async () => {
  try {
    const response = await fetch(`http://${IP}:${PORT}/sdapi/v1/options`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getModelList = async () => {
  try {
    const response = await fetch(`http://${IP}:${PORT}/sdapi/v1/sd-models`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getSamplerList = async () => {
  try {
    const response = await fetch(`http://${IP}:${PORT}/sdapi/v1/samplers`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export {getImages, getModelList, getSamplerList, getConfig, setConfig};
