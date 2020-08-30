import { useState } from 'react';
import { copyStringToClipboard } from '@/utils/tools';
import { message } from 'antd';

const useCopyClipBoard = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (str) => async () => {
    const result = await copyStringToClipboard(str);

    if (result) {
      message.success('Copy success');
      setCopied(true);
    }
  };
  setTimeout(() => {
    setCopied(false);
  }, 1000);
  return [isCopied, handleCopy];
};

export default useCopyClipBoard;
