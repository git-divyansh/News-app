import { useGlobalNightModeContext } from '../Context/ContextBody'
import "./Footer.css"

const Footer = () => {

    const {color} = useGlobalNightModeContext();

  return (
    <div className='footbar'>
        <div className='footer'>&copy; copyright</div>
    </div>
  )
}

export default Footer