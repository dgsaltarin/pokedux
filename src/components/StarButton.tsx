import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { FC } from 'react';

const StarButton: FC<{ isFavorite: boolean; OnClick: () => void }> = ({ isFavorite, OnClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={OnClick}></Button>;
};

export default StarButton;
