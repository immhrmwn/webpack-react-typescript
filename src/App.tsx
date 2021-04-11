import { ClickCounter } from './ClickCounter'
import './style.css'
export const App = () => {
  return (
    <>
      <h1>
        Edited Hello React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClickCounter />
    </>
  )
}
