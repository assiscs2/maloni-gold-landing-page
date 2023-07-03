export function VideoPlayer() {
    return (
        <div className="mt-4 p-2 mb-2">
            <video 
            src="https://firebasestorage.googleapis.com/v0/b/maloni-gold-landing-page.appspot.com/o/videos%2Fvideo-maloni-gold-compressed-720p.mp4?alt=media&token=54ee7af7-52af-416a-848d-26b3c48165a8"
            controls
            className="min-w-full min-h-full w-auto h-auto bg-cover lg:max-w-[480px]"
            preload="auto"
            ></video>
        </div>
    )
}