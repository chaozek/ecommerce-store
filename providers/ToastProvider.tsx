import * as React from "react";
import { Toaster } from "react-hot-toast";

interface IToastProviderProps {}

const ToastProvider: React.FunctionComponent<IToastProviderProps> = (props) => {
  return <Toaster {...props} />;
};

export default ToastProvider;
