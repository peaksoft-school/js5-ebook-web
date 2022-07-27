import styled from 'styled-components'

function CardItems({
   flexGrow,
   flexShrink,
   flexBasis,
   children,
   flexWrap,
   flexDirection,
   marginRight,
}) {
   return (
      <CardItemsBlock
         flexGrow={flexGrow}
         flexShrink={flexShrink}
         flexBasis={flexBasis}
         flexWrap={flexWrap}
         flexDirection={flexDirection}
         marginRight={marginRight}
      >
         {children}
      </CardItemsBlock>
   )
}

export default CardItems

const CardItemsBlock = styled.div`
   /* border: 1px solid red; */
   flex-basis: ${(props) => props.flexBasis || 'none'};
   flex-grow: ${(props) => props.flexGrow || 'none'};
   flex-shrink: ${(props) => props.flexShrink || 'none'};
   display: flex;
   flex-direction: ${(props) => props.flexDirection || 'row'};
   flex-wrap: ${(props) => props.flexWrap || 'wrap'};
   margin-right: ${(props) => props.marginRight || '0'};
`
