import { AddWalletButton, AddWalletModal, ErrorCard, Heading, Loader, WalletCard } from '../components/shared';
import Layout from '../components/shared/Layout';
import styled from 'styled-components'
import { useAppContext } from '../context/UserContext'


interface IUserProps {
  currency: string;
  imgURL: string;
  name: string;
  balance: string;
  id: string;
}

const Wallet = () => {
  const {data, showModal, handleShowModal, isLoading, errorMessage, handleRefresh} = useAppContext()

  return (
    <Layout>
      <AddWalletModal isOpen={showModal} />
      <WalletWrapper>
        <Flex>
          <Heading>Wallet</Heading>
          <AddWalletButton onClick={handleShowModal} >Add new wallet</AddWalletButton>
        </Flex>
        <Article>
          {isLoading ? (
            <LoaderWrapper>
              <Loader size={100} width={8} />
            </LoaderWrapper>
            ) : errorMessage ? 
            <ErrorCard onClick={handleRefresh} loading={isLoading} />
            : 
            <CardWrapper>
              {data?.map((user:IUserProps) => (
                <WalletCard user={user} key={user?.id} />
              ))}
            </CardWrapper>
          }
        </Article>
      </WalletWrapper>
    </Layout>
  )
}

const WalletWrapper = styled.div`
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
`
const Flex = styled.div`
  border-bottom: solid 1px #cccc;
  padding-bottom: 0.6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LoaderWrapper = styled.div`
  margin: 10rem auto 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Article = styled.div`
  
  height: 100%;
  // width: 100%;
`

export default Wallet
