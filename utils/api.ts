const IP = '192.168.50.39';
const PORT = '7860';

interface Payload {
  prompt: string;
  steps: number;
}

const getImages = async (payload: Payload) => {
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
