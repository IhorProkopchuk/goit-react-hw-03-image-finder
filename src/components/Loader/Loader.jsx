import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#3737d7"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      visible={true}
    />
  );
};
