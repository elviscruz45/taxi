const pallete = {
  white: '#fff',
  black: '#000',
  grey: 'rgba(34,34,34,0.8)',
};

export const colors = {
  typography: {
    body: pallete.grey,
  },
  common: {
    background: pallete.white,
    shadowDefault: pallete.black,
  },
  components: {
    mapSearchBar: {
      squareColor: pallete.black,
    },
  },
};

export type Colors = typeof colors;
