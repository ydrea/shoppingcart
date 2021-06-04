import Button from '@material-ui/core/Button'
//types
import {CartItemType} from './Home'
//styles
import {Wrapper} from './Item.style'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}
const Item: React.FC<Props> = ({
    item, handleAddToCart
}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <p> {item.desc} </p>
        </div>
        <Button onClick={() => handleAddToCart(item)}> Add to cart </Button>
        </Wrapper>
    )

    export default Item;