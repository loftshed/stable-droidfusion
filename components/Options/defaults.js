export const defaultOptions = {
  general: {
    negativePrompt: {
      defaultValue:
        'clipping, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name',
    },
    seed: {
      defaultValue: '-1',
    },
    width: {
      defaultValue: 512,
      maximumValue: 2048,
    },
    height: {
      defaultValue: 512,
      maximumValue: 2048,
    },
    steps: {
      defaultValue: 40,
      maximumValue: 150,
    },
    cfgScale: {
      defaultValue: 7,
      maximumValue: 15,
    },
    batchCount: {
      defaultValue: 1,
      maximumValue: 8,
    },
    batchSize: {
      defaultValue: 1,
      maximumValue: 100,
    },
  },
};
