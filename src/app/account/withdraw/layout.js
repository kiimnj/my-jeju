import Header from '../accheader'
import './withdraw.css';

export default function WithdrawLayout({ children }) {
    return (
      <div id="withdrawLayout">
        <Header />
        {children}
      </div>
    )
  }