import { useEffect, useState } from "react";
/**
 * Debounces a value by delaying the update using a timer and runs a custom callback.
 *
 * @template T - The type of the value to be debounced.
 * @param {T} value - The value to be debounced.
 * @param {number} [delay=500] - The delay in milliseconds before updating the debounced value.
 * @param {(...arg) => void} [customCallback] - The custom callback to run after the debounced value is updated.
 * @returns {T} - The debounced value.
 */
export function useDebounce<T>(
  value: T,
  delay?: number,
  customCallback?: (...arg: unknown[]) => void
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      if (customCallback) {
        customCallback();
      }
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
