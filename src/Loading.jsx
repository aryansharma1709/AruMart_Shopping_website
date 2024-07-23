import React from 'react';
import { ImSpinner9 } from "react-icons/im";
function Loading(){
return (<div className="lg:text-3xl text-blue-500 flex justify-center items-center min-h-screen bg-white"> <ImSpinner9  className="animate-spin text-5xl text-primary-light" />
</div>);
}
export default Loading;