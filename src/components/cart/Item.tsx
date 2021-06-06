import Button from '@material-ui/core/Button'
//context
import {useContext} from 'react'
import CartItemContext from '../../context/ItemsContext'
//styles
import {Wrapper} from './Item.style'

// type Props = {
//     item: CartItemType;
//     handleAddToCart: (clickedItem: CartItemType) => void
// }

const Item: React.FC<any> = ({item, handleAddToCart}) => {
    const cartContext = useContext (CartItemContext)

return(
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <p> {item.desc} </p>
        </div>
        <Button onClick={() => handleAddToCart(item)}> Add to cart </Button>
        </Wrapper>
    )
}
    export default Item;