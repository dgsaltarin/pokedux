import { Card } from 'antd';
import { FC } from 'react';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import StarButton from './StarButton';
import { AppDispatch } from '../redux/Store';
import { useDispatch } from 'react-redux';
import { setFavorites } from '../redux/actions';

const PokemonCard: FC<{ name: string; image: string; types: string[]; id: any }> = ({ name, image, types, id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const typesString = types.map((element) => element.type.name).join(', ');
  const handleOnClick = () => {
    dispatch(setFavorites({ pokemonId: id }));
  };
  return (
    <Card title={name} bordered={false} cover={<img src={image} alt={name} />} extra={<StarButton isFavorite OnClick={handleOnClick} />}>
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
