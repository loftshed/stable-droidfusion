const IP = '192.168.50.39';
const PORT = '7860';

interface Txt2ImgPayload {
  prompt: string;
  negative_prompt: string;
  restore_faces: boolean;
  sampler_name: string;
  steps: number;
  cfg_scale: number;
  batch_size: number;
  seed: number;
  width: number;
  height: number;
}

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

/* const getProgress = async () => {
  try {
    const response = await fetch(`http://${IP}:${PORT}/sdapi/v1/progress`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}; */

export {getImages};
