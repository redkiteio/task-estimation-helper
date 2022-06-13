import { useState } from "react";

const useSubtask = () => {
  const [collapsed, setCollapsed] = useState(false);
  return { collapsed, setCollapsed };
};

export default useSubtask;
