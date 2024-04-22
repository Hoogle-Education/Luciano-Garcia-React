import { Content } from './components/Content'
import { Header } from './components/Header'

import './index.css'

export function App() {
  return (
    <div>
      <Header />
      <Content author="Luciano" content="lorem ipsum dolor sit amet" />
      <Content author="Hugo" />
    </div>
  )
}
