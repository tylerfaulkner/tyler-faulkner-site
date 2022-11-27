import Image from "next/image"

export default function Layout({ meta, content }) {
    return (
        <div>
            <div className='img-header'><Image src={meta.image} fill objectFit="cover"/></div>
            <div id='article'>
                <div id="content">
                    {content}
                </div>
            </div>
        </div>
    );
  }