import { USER_ICON } from '../utils/constants';

const ChatMessage = ({name,message}) => {
   return (
    <div className="flex items-start gap-2 text-sm">
      <div className="h-7 w-7 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-100">
        {name?.[0] || "U"}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 shadow-sm max-w-full">
        <p className="font-semibold text-xs text-gray-800 dark:text-gray-100">{name}</p>
        <p className="text-gray-700 dark:text-gray-100 break-words">{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
 
