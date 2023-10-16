import Header from '../../header';
import '../../place.css';
import './edit.css'

export default function EditLayout({ children }) {
    return (
      <div id="editContainer">
        <Header />
          {children}
      </div>
    )
  }