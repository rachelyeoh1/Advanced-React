import formatMoney from '../lib/formatMoney'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'
import Title from "./styles/Title"
import Link from 'next/link'

const Product = ({product}) => {
  return (
    <ItemStyles>
        <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
        <Title>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>
        <PriceTag>{formatMoney(product.price)}</PriceTag>
        <p>{product.description}</p>
        {/* TODO: Add buttons to edit and delete item */}
    </ItemStyles>
  )
}

export default Product