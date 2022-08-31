import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const StarButton = ({ isFavorite, OnClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={OnClick}></Button>;
};

export default StarButton;
