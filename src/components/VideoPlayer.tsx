export function VideoPlayer() {
    return (
        <div className="mt-4 p-2 mb-2">
            <video 
            src="https://firebasestorage.googleapis.com/v0/b/maloni-gold-landing-page.appspot.com/o/videos%2Fvideo-maloni-gold.MOV?alt=media&token=010fb61e-0446-4635-8b37-65554485ac6d"
            controls
            className="min-w-full min-h-full w-auto h-auto bg-cover"
            ></video>
        </div>
    )
}