import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;

.header {
    position: sticky;  
    position: -webkit-sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    items-align: space-between;
    width: 100%;
    // min-height: 20%;
    background: #FFCE25;
}

.cart-button {
    margin-top: 20px;
    padding: 20px;
}
.vector {
    position: sticky
    // size: 30%;
    // left: 12.5%;
    // right: 12.5%;
    // top: 8.33%;
    // bottom: 8.33%;
}
`;