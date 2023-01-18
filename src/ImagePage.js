import { AiOutlineSend } from "react-icons/ai";
import { useState } from 'react'
import Axios from 'axios'

const ImagePage = (render) => {
    return (
        <div className="container mx-auto h-screen top-0 flex bg-gray-900 text-white shadow-xll max-w-full">
            <InputBox />
        </div>
    )
}

const InputBox = () => {
    const [query, setQuery] = useState();
    const [queryList, setQueryList] = useState([]);
    const [response, setResponse] = useState([]);
    const [responseList, setResponseList] = useState([]);

    const createQuery = (event) => {
        event.preventDefault();
        setQueryList([...queryList, { query }]);
        Axios.post('http://localhost:3001/createImage', {
            query
        }).then((res) => {
            var response = res.data['data'][0]['url']
            console.log(response);
            setResponse(response);
            setResponseList([...responseList, { response }]);
            console.log(responseList)
        });
    };

    return (
        <div>
            <div className="w-5/6 ml-28 items-center absolute justify-center flex top-10">
                <div>
                    <div>
                        <div>Get An Image</div>
                    </div>
                </div>
            </div>
            <div className="h-4/6 flex flex-col ml-36 w-5/6 overflow-y-auto">
                <div className="dark top-36 absolute w-5/6 space-y-44">
                    {queryList && queryList.map((e) => {
                        return (
                            <div className="p-4 rounded-sm bg-gray-800">
                                <p className="text-white text-xl">{e.query}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="dark top-56 absolute w-5/6 space-y-44">
                    {responseList && responseList.map((e) => {
                        return (
                            <div className="bg-gray-700 p-4 rounded-sm">
                                <p className="text-white text-xl">{e.response}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <form>
                <textarea onChange={(event) => {
                    setQuery(event.target.value);
                    if(queryList.length === 3){
                        setQueryList([])
                        setResponseList([])
                    }
                }}
                    type="text" name="name" autoComplete="off" placeholder="Give a Prompt" className="caret-gray-200 bg-gray-800 shadow-md h-20 w-5/6 inset-x-0 bottom-6 absolute left-36 items-center snap-center text-xl p-6" />
                <button onClick={createQuery} type="reset" value="Reset Form" name="submit" className="text-white inset-x-0 bottom-6 absolute bg-transparent w-20 h-20 ml-auto mr-28 focus:outline-none focus:none">
                    <AiOutlineSend size="28" />
                </button>
            </form>
        </div>
    )
}

export default ImagePage