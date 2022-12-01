import { createContext, useState, useEffect, useContext } from 'react'
import { API_URL } from '../config';


interface IAppContext {
  isLoading: boolean | null,
  handleRefresh: () => void,
  handleShowModal: () => void,
  handleCloseModal: () => void,
  createWallet: (currency: string) => Promise<void>,
  getAllWallets: () => Promise<void>
  errorMessage: boolean,
  data: any;
  allWalletData?: any
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<IAppContext | null>({} as IAppContext);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [data, setData] = useState([]);
  const [allWalletData, setAllWalletData] = useState([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true)
    fetch(`${API_URL}/accounts`).then((response) => {
      if(response.statusText === "OK" && response.status >= 200 && response.status < 300) {
          return response.json()
      } else {
          throw new Error("Network Error!!")
      }
    }).then((json) => {
      setData(json)
      setIsLoading(false)
    }).catch((error) => {
      setIsLoading(false)
      setErrorMessage(true);
    });
  };

  const handleRefresh = async () => {
    fetchData()
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const createWallet = async (data: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(`${API_URL}/accounts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({currency: data})
      })

      if(res.ok) {
        setShowModal(false)
        fetchData()
        getAllWallets()
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setErrorMessage(true)
    }
  }

  const getAllWallets = async () => {

    fetch(`${API_URL}/wallets`).then((response) => {
      if(response.statusText === "OK" && response.status >= 200 && response.status < 300) {
          return response.json()
      } else {
          throw new Error("Network Error")
      }
      }).then((json) => {
        setAllWalletData(json)
        setIsLoading(false)
      }).catch((error) => {
        setIsLoading(false)
        setErrorMessage(true)
      })
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <AppContext.Provider value={{
      handleRefresh, 
      setShowModal, 
      isLoading, 
      errorMessage, 
      data, 
      createWallet,
      getAllWallets,
      allWalletData,
      showModal, 
      handleCloseModal, 
      handleShowModal
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context) throw new Error('useAppContext must be used inside a AppProvider')
  return context
}
