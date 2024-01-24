export function Imagecard({ image }) {
    const tags = image.tags.split(",");

    return (
        <div>
            <div className="max-w-sm shadow-lg rounded  ">
                <img src={image.webformatURL} alt="" className="w-full" />
                <div className="font-bold text-purple-500 px-4 py-6">Photo by { image.user }</div>
                <ul className="px-4 py-3">
                    <li>
                        <strong>Likes:</strong>
                        {image.likes}
                    </li>
                    <li>
                        <strong>Views:</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {image.downlaods}
                    </li>
                </ul>
                <div className="px-4 py-3">
                    {tags.map((tag,index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                    ))}
                    
                    

          
                </div>
        
            </div>
        </div>
    )
}