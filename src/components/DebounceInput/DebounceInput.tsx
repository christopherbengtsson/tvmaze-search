import { useEffect, useMemo, useCallback, forwardRef } from 'react';
import debounce from 'lodash.debounce';
import { TextField, TextFieldProps } from '@mui/material';

type DebounceInputProps = TextFieldProps & {
  onDebounce: (value: string) => void;
  delay?: number;
};
export const DebounceInput = forwardRef<HTMLInputElement, DebounceInputProps>(
  function DebounceInput({ onDebounce, delay = 300, ...props }, ref) {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onDebounce(e.target.value);
      },
      [onDebounce],
    );

    const debouncedResults = useMemo(() => {
      return debounce(handleChange, delay);
    }, [delay, handleChange]);

    useEffect(() => {
      return () => {
        debouncedResults.cancel();
      };
    }, [debouncedResults]);

    return <TextField {...props} ref={ref} onChange={debouncedResults} />;
  },
);
