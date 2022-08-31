import { Card } from 'antd';
import { FC } from 'react';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import StarButton from './StarButton';
import { AppDispatch } from '../redux/Store';
import { useDispatch } from 'react-redux';
import { Type } from '@/types/Pokemon';
import { setFavorite } from '@/redux/slices/PokemonSlice';

const PokemonCard: FC<{ name: string; image: string; types: Type[]; id: any }> = ({ name, image, types, id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const typesString = types.map((type) => type.type.name).join(', ');
  const handleOnClick = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card title={name} bordered={false} cover={<img src={image} alt={name} />} extra={<StarButton OnClick={handleOnClick} isFavorite={} />}>
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
