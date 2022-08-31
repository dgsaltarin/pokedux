import { Card } from 'antd';
import { FC } from 'react';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { StarOutlined } from '@ant-design/icons';
import { Type } from '@/types/Pokemon';

const PokemonCard: FC<{ name: string; image: string; types: Type[] }> = ({ name, image, types }) => {
  const typesString: string = types.map((type: Type) => type.type.name).join(', ');
  return (
    <Card title={name} bordered={false} cover={<img src={image} alt={name} />} extra={<StarOutlined />}>
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
