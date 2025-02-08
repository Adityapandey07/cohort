
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom, jobAtom, notificationAtom, messageAtom, totalNotificationSelector } from './atoms'

function App() {

  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp() {

  const networkCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(messageAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button> Home </button>

      <button> Network ({networkCount >=100 ? "99+" : networkCount}) </button>
      <button> Jobs ({jobCount >=100 ? "99+" : jobCount}) </button>
      <button> Message ({notificationCount >=100 ? "99+" : notificationCount}) </button>
      <button> Notification ({messageCount >=100 ? "99+" : messageCount}) </button>
      
      <button> Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
