import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
position: absolute;

.header {
    position: fixed;
    flex-direction: row;
    items-align: space-between;
    width: 100%;
    min-height: 20%;
    background-color: yellow

}
.cart-button {
    margin-top: 20px;
    padding: 20px;

    display: flex;
    flex-direction: row;
    position: fixed;
}
.vector {
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 8.33%;
    bottom: 8.33%;
}
`;