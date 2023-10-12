import './detail.css';
import Header from '../header';

export default function DetailLayout({ children }) {

    let location = "detail"
    return (
        <>
            <Header location={location}/>  
            <div id="detailContainer">
                {children}
            </div>
        </>
    )
  }