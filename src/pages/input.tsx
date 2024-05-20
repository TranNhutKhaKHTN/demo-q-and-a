import { useEffect, useRef } from "react";

const Input = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current?.focus();
    }
  }, [ref]);

  return (
    <div>
      <input ref={ref} />
    </div>
  );
};

export default Input;
