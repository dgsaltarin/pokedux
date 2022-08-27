import { Card } from 'antd';
import { FC } from 'react';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard: FC = ({ name }) => {
  return (
    <Card
      title={name}
      bordered={false}
      cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="ditto" />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
