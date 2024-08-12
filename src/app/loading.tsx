import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
    return (
        <div className={`flex h-screen w-screen items-center justify-center`}>
            <FontAwesomeIcon className="text-5xl" icon={faSpinner} spin />
        </div>
    )
}

export default Loading
