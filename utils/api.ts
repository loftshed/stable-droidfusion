interface Options {
  ip: string;
  port: number;
}

interface Payload {
  prompt: string;
  steps: number;
}

const getImages = async (payload: Payload, options: Options) => {
  const {ip, port} = options;
  try {
    const response = await fetch(`http://${ip}:${port}/sdapi/v1/txt2img`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json.images;
  } catch (error) {
    console.error(error);
  }
};

export {getImages};
