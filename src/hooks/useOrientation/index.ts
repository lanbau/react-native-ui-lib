import {useEffect, useCallback, useState} from 'react';
import {Constants} from 'helpers';
import useDidUpdate from '../useDidUpdate';

interface UseOrientationProps {
  onOrientationChange?: Function;
}

const useOrientation = ({onOrientationChange}: UseOrientationProps = {}) => {
  const [orientation, setOrientation] = useState(Constants.orientation);

  const orientationChangeListener = useCallback(() => {
    setOrientation(Constants.orientation);
  }, []);

  useEffect(() => {
    const listener = Constants.addDimensionsEventListener(orientationChangeListener);
    return () => Constants.removeDimensionsEventListener(listener);
  }, []);

  useDidUpdate(() => {
    onOrientationChange?.(orientation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation]);

  return {
    orientation
  };
};

export default useOrientation;
