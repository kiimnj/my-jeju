import Header from '@/app/place/header';
import './edit.css'

export default function EditLayout({ children }) {
    return (
      <div id="editContainer">
        <Header />
          {children}
      </div>
    )
  }