export default function YTVideo(props) {
    const { code } = props
    const link = `https://www.youtube.com/embed/${code}?autoplay=1`;
    return(
        <div className='video-box'>
            <iframe height="400" width="640"    
            src={link}>   
            </iframe>
        </div> 
    )
}