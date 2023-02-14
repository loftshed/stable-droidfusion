export const defaultOptions = {
  general: {
    negativePrompt: {
      def: 'clipping, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name',
    },
    seed: {
      def: '-1',
    },
    width: {
      def: 512,
      max: 2048,
    },
    height: {
      def: 512,
      max: 2048,
    },
    steps: {
      def: 40,
      max: 150,
    },
    cfgScale: {
      def: 7,
      max: 15,
    },
    batchCount: {
      def: 1,
      max: 8,
    },
    batchSize: {
      def: 1,
      max: 100,
    },
  },
};
