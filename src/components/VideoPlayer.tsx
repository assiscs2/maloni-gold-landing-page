export function VideoPlayer() {
    return (
        <div className="mt-4 p-2 mb-2">
            <video 
            src="https://firebasestorage.googleapis.com/v0/b/maloni-gold-landing-page.appspot.com/o/videos%2Fvideo-maloni-gold_compressed.mp4?alt=media&token=8478d005-707d-40b6-bc5c-6066c1cda8af"
            controls
            className="min-w-full min-h-full w-auto h-auto bg-cover"
            ></video>
        </div>
    )
}