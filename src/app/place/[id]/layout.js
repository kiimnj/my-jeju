import './detail.css';
import Header from '../header';

export default function DetailLayout({ children }) {

    return (
        <>
            <div id="detailContainer">
                {children}
            </div>
        </>
    )
  }