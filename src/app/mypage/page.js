import ProfileTab from './profiletab'
import MyPageList from './mypagelist'

export default function MyPage() {

    return (
      <div id="myPageContainer">
        <ProfileTab />
        <div className='hr'>
          <div>
            <hr className='hr' />
          </div>
        </div>
        <MyPageList />
      </div>
    )
  }