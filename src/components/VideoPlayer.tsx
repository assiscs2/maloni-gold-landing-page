export function VideoPlayer() {
    return (
        <div className="mt-4 p-2 mb-2">
            <video 
            src="https://firebasestorage.googleapis.com/v0/b/maloni-gold-landing-page.appspot.com/o/videos%2Fmaloni-gold-video.mp4?alt=media&token=4c07cbb5-c58a-445c-8f22-a35bc8f60ec5"
            controls
            className="min-w-full min-h-full w-auto h-auto bg-cover"
            ></video>
        </div>
    )
}