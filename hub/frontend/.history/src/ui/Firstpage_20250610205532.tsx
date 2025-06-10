export default function Firstpage(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const messages = ["Welcome to Our App", "Explore the Features"];

    useEffect(() => {
        const interval: number | NodeJS.Timeout = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentMessage = messages[messageIndex];

    if (imagePaths.length === 0) {
        return (
            <div className={styles.slideScreen}>
                <div className={styles.welcomeMessage}>
                    <h1>{currentMessage}</h1>
                    <p>No slideshow images available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.slideScreen}>
            <div className={styles.welcomeMessage}>
                <h1>Welcome to Our App</h1>
            </div>
            <div
                className={styles.slides}
                style={{
                    transform: `translateX(-${currentIndex * 100}vw)`,
                    width: `${imagePaths.length * 100}vw`,
                }}
            >
                {imagePaths.map((path, index) => (
                    <img
                        key={index}
                        src={path}
                        alt={`Slide ${index}`}
                        className={styles.slideImage}
                    />
                ))}
            </div>
        </div>
    );
};
