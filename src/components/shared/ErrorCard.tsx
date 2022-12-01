import styled from 'styled-components'
import errorImg from '../../assets/errorimg.png'
import Button from './Button'
import Loader from './Loader'

interface IErrorProps {
  onClick: () => void,
  loading: boolean | null,
}

const ErrorCard = ({onClick, loading}: IErrorProps) => {

  return (
    <ErrorCardWrapper>
      <img src={errorImg} alt="ErrorImage" />
      <p>Network Error</p>
      <Button onClick={onClick}>{loading ? <Loader size={15} /> : 'Try again'}</Button>
    </ErrorCardWrapper>
  )
}

const ErrorCardWrapper = styled.div`
  width: 50%;
  margin: 8rem auto 0 auto;
  padding: 2rem;
  text-align: center;
`

export default ErrorCard