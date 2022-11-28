import Image from "next/image"

export default function Layout({ meta, content }) {
    return (
        <div className="article-page">
            <div className='img-header'><Image src={meta.image} fill objectFit="cover"/></div>
            <div className="article">
                <div id="content">
                    {content}
                </div>
            </div>
        </div>
    );
  }