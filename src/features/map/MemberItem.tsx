import { Link } from 'react-router-dom';
import { Member } from '../../app/models/member';


const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  interface Props {
    member: Member
  }

export default function MemberItem({member}: Props) {
    //const {currentCity, deleteCity} = useCities()
    
    // destructure the city props
    const { cityName, joinDate, id, position } = member

    //${id === currentCity.id ? styles["cityItem--active"]:""}
    //styles.cityItem
    return (
        <li>
          {/* <Link className={``} 
            to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
            <h3 className={''}>{cityName}</h3>
            <time className={''}>{formatDate(joinDate)}</time>
            <button className={''} onClick={handleDelete}>&times;</button>
          </Link> */}
          <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className="cursor-pointer flex items-center justify-between bg-appLightGray text-gray-800 text-lg rounded-lg  px-4 py-1 my-4 border-l-4 border-appGreen">
            <h3 className="flex-1">{cityName}</h3>
            {/* <span className="mr-2 text-sm">{formatDate(joinDate)}</span> */}
            <button className="bg-black rounded-full w-5 h-5">
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>          
              </span>
            </button>
          </Link>
        </li>
    )
}

