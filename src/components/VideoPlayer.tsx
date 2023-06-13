export function VideoPlayer() {
    return (
        <div>
            <video 
            src="../public/videos/maloni-video.mp4"
            controls={true}
            className="min-w-full min-h-full w-auto h-auto bg-cover"
            ></video>
        </div>
    )
}