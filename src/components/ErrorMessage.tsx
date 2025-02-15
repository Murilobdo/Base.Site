
import { FaExclamation } from "react-icons/fa";


export function ErrorMessage({ message }: { message: string | undefined }) {
    return (
        <div className="text-red-500 text-sm flex justify-start p-2 border-solid border-red-600 border-2 rounded-lg bg-red-100 mt-2">
            <FaExclamation className="h-6 w-6 mr-2" />
            <span>{message}</span>
        </div>
    )
}